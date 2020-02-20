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
                projeto={"Nome"} 
                ano={"Ano"} 
                role={"Função"} 
                tools={[
                    {id:1,name:"Ferramenta "},
                    {id:2,name:"Ferramenta "},
                    {id:3,name:"Ferramenta "}
                ]}
                demo={""}
                source={"https://github.com/bdsqqq/bdsqme"}
                img={"https://images.unsplash.com/flagged/photo-1580313766096-b388176239b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
            />
            <Card 
                projeto={"Nome"} 
                ano={"Ano"} 
                role={"Função"} 
                tools={[
                    {id:1,name:"Ferramenta "},
                    {id:2,name:"Ferramenta "},
                    {id:3,name:"Ferramenta "}
                ]}
                demo={""}
                source={"https://github.com/bdsqqq/bdsqme"}
                img={"https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
            />
            <Card 
                projeto={"Nome"} 
                ano={"Ano"} 
                role={"Função"} 
                tools={[
                    {id:1,name:"Ferramenta "},
                    {id:2,name:"Ferramenta "},
                    {id:3,name:"Ferramenta "}
                ]}
                demo={""}
                img={"https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
            />
        </CardContainer>
        </>
    );
}

export default Folio