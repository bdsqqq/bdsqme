import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from './firebase';

import Card from './folioCard';

function Folio(){
    const breakpoints = [48, 64]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}em)`
    )

    const Wrapper = styled.div`
        margin: -15px 2rem;
    `
    const Title = styled.span`
        font-size: 3em;
        color: #f3f3f3;

        ${mq[0]}{
            font-size: 4em;
        }
    `
    const CardContainer = styled.div`
        width: 100%;
        height: auto;
        background: #575151;
        border-radius: 10px 10px 0 0;
        margin: 0 auto;
        padding: 1em;

        display: flex;
        flex-wrap: wrap;

        grid-template-columns: repeat(auto-fit, minmax(8rem, 24rem));

        @supports (display: grid) {
            display: grid;
            grid-gap: 2rem;

            ${mq[0]}{
                grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
            }
        }
    `

    const[projects, setProjects] = useState([]) //creates a state variable called projects and a method to update it

    useEffect(() => {
        db.ref('/projects').on('value', (snapshot) => { //creates a reference to /projects on the firebase db and creates a snapshot on each value change
            let projects = []; // creates an empty array called projects to store the data from snapshots
            snapshot.forEach(childSnapshot => {
                projects.push({ ...childSnapshot.val(), key: childSnapshot.key}) //adds each value from a snapshot to the projects array
            });
            setProjects({ projects }) //sets the projects state to be equal to the projects array
        })
    }, []); //dep is an empty array so this effect will be called only once

    console.log(projects, "array")
    return(
        <>
        <Wrapper>
            <Title>
                Folio
            </Title>
        </Wrapper>
        <CardContainer>
            <Card 
                projeto={"Covid-19 Tracker"} 
                ano={"2020"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"React "},
                    {id:2,name:"Yarn "},
                    {id:4,name:"Styled Components "},
                    {id:3,name:"Fetch API "}
                ]}
                demo={"https://covid.bdsq.me/"}
                source={"https://github.com/bdsqqq/covid19-tracker"}
                img={"https://i.postimg.cc/PrbpMY6X/covid19-Tracker.jpg"}
            />
            <Card 
                projeto={"Live Markdown"} 
                ano={"2020"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"React "},
                    {id:2,name:"Firebase "},
                    {id:4,name:"Styled Components "},
                    {id:3,name:"UUID "},
                    {id:5,name:"Yarn "}
                ]}
                demo={"https://markdown.bdsq.me/"}
                source={"https://github.com/bdsqqq/live-markdown-react-firebase"}
                img={"https://i.postimg.cc/ZqDB3BSg/markdown.jpg"}
            />
            <Card 
                projeto={"Onde está a iss??"} 
                ano={"2020"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"React "},
                    {id:2,name:"Fetch API "},
                    {id:4,name:"React Hooks "},
                    {id:3,name:"Leaflet "}
                ]}
                demo={"https://iss.bdsq.me/"}
                source={"https://github.com/bdsqqq/react-wherestheiss"}
                img={"https://i.postimg.cc/6QVmQ85j/wherestheiss.jpg"}
            />
            <Card 
                projeto={"igorbedesqui.com"} 
                ano={"2020"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"React "},
                    {id:2,name:"Styled Components "},
                    {id:4,name:"React Hooks "},
                    {id:3,name:"Axios "}
                ]}
                demo={"https://igorbedesqui.com/"}
                source={"https://github.com/bdsqqq/bdsqme"}
                img={"https://i.postimg.cc/1zhVRtfj/reactigorbedesqui.jpg"}
            />
            <Card 
                projeto={"bdsq-rest-api"} 
                ano={"2019-2020"} 
                role={"Desenvolvedor backend"} 
                tools={[
                    {id:1,name:"NODE.js "},
                    {id:2,name:"Express.js "},
                    {id:3,name:"Conexão com API de terceiros "},
                    {id:4,name:"Nginx "},
                    {id:5,name:"PM2 "},
                    {id:6,name:"NodeMailer "},
                    {id:7,name:"dotEnv "},
                    {id:8,name:"Cors "},
                    {id:9,name:"nodeFetch "}
                ]}
                demo={"https://bdsq-rest-api.herokuapp.com/"}
                source={"https://github.com/bdsqqq/bdsq-rest-api"}
                img={"https://i.postimg.cc/5t5BZGfT/bdsq-rest-api.jpg"}
            />
            <Card 
                projeto={"Portfolio em AngularJS"} 
                ano={"2019"} 
                role={"Desenvolvedor Web Angular"} 
                tools={[
                    {id:1,name:"Angular.js "},
                    {id:2,name:"TypeScript "},
                    {id:3,name:"Fetch API "},
                ]}
                demo={"https://angular.bdsq.me/"}
                source={""}
                img={"https://i.postimg.cc/63LCHB91/igor-Bedesqui.jpg"}
            />
            <Card 
                projeto={"Odara Fotografia"} 
                ano={"2017"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"HTML "},
                    {id:2,name:"CSS "},
                    {id:4,name:"JavaScript "},
                    {id:3,name:"PHP "}
                ]}
                demo={"http://odarafotografia.com/"}
                source={""}
                img={"https://i.postimg.cc/B6GxcjGK/Odara.jpg"}
            />
        </CardContainer>
        </>
    );
}

export default Folio