import React from 'react';
import styled from 'styled-components'

import Card from './folioCard'

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

    return(
        <>
        <Wrapper>
            <Title>
                Projetos
            </Title>
        </Wrapper>
        <CardContainer>
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
                projeto={"Portfolio em AngularJS"} 
                ano={"2019"} 
                role={"Desenvolvedor Web FrontEnd"} 
                tools={[
                    {id:1,name:"Angular.js "},
                    {id:2,name:"TypeScript "},
                    {id:3,name:"Fetch API "},
                ]}
                demo={"https://igorbedesqui.com/"}
                source={"https://github.com/bdsqqq/bdsq.me_angular"}
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