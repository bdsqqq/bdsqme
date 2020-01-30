import React from 'react';
import styled from 'styled-components'

import Card from './folioCard'

function Folio(){
    const Wrapper = styled.div`
        margin: -15px 2em;
    `
    const Title = styled.span`
        font-size: 3em;
        color: #f3f3f3;
    `
    const CardContainer = styled.div`
        width: 100%;
        height: auto;
        background: #575151;
        border-radius: 10px 10px 0 0;
        margin: 0 auto;
        padding: 1em;
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
                projeto={"Projeto Pessoal"} 
                ano={"2019"} 
                role={"Desenvolvedor Web Fullstack"} 
                tools={[
                    {id:1,name:"NODE.JS "},
                    {id:2,name:"EXPRESS.JS "},
                    {id:3,name:"NGINX"}
                ]}
                demo={"https://igorbedesqui.com"}
                source={"https://github.com/bdsqqq/bdsqme"}
                img={"https://images.unsplash.com/flagged/photo-1580313766096-b388176239b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
            />
        </CardContainer>
        </>
    );
}

export default Folio