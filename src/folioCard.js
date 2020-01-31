import React from 'react';
import styled from 'styled-components';
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props){
    const CardWrapper = styled.div`
        position: relative;
        margin: 20px auto;
        width: 100%;
        &:hover MetaWrapper{
            transform: scale(1);
            transition: all 200ms cubic-bezier(0.785, 0.010, 0.000, 1.415);
            visibility: visible;
        }
    `
    const CardImage = styled.img`
        width: 95%;
        display: block;
        height: auto;
        object-fit: cover;
        transition: all 200ms cubic-bezier(0.785, 0.010, 0.000, 1.415);
    `
    const MetaWrapper = styled.div`
        position: absolute;
        right: -5px;
        bottom: -15px;
        width: 95%;
        max-height: 105%;
        overflow: scroll;
    `
    const Meta = styled.div`
        background: rgba(0, 0, 0, 0.9);
        padding: 15px 15px 10px;
        color: white;
        width: 100%;
    `
    const MetaHeader = styled.ul`
        text-decoration: none;
        color: #f3f3f3;
        font-size: 1.3em;
        text-transform: uppercase;
    `
    const Projeto = styled.li`
        display: inline;
        float: left;
    `
    const Ano = styled.li`
        display: inline;
        float: right;
    `
    const MetaRole = styled.p`
        width: 50%
    `
    const MetaToolsWrapper = styled.div`
        padding: 10px 0;
        width: 100%;
    `
    const Tool = styled.span`
        padding: 5px;
        background: #575151;
        border-radius:3px;
        margin-right: 8px;
        font-size: .8em;
        line-height: 3em;
    `
    const MetaButtonsWrapper = styled.div`
        padding: 5px 0;
        margin: 0 auto;
        width: auto;
    `
    const Button = styled.a`
        cursor: ${props => props.private ? "default" : "pointer"};
        padding: 6px;
        text-decoration: none;
        background: #feb062;
        border-radius: 5px;
        margin-right: 8px;
        font-size: .9em;
        color: #3f3b3b;

        opacity: ${props => props.private ? "0.4" : "1"};
    `
    const Tools = props.tools

    let p = "" //Usado no botão de código pra dizer privado ou não

    if(!props.source){
        p = "Privado"
    }

    return(
        <CardWrapper>
            <CardImage src={props.img} alt={props.alt}/>
            <MetaWrapper>
                <Meta>
                    <MetaHeader>
                        <Projeto>{props.projeto}</Projeto>
                        <Ano>{props.ano}</Ano>
                    </MetaHeader>
                    <MetaRole>{props.role}</MetaRole>
                    <MetaToolsWrapper>
                        {Tools.map((tool)=><Tool key={tool.id}>{tool.name}</Tool>)}
                    </MetaToolsWrapper>
                    <MetaButtonsWrapper>
                        <Button target="_blank" href={props.demo}><FontAwesomeIcon icon={faEye}/> Demo</Button>
                        <Button private={p} target="_blank" href={props.source}><FontAwesomeIcon icon={faCode}/> Código {p}</Button>
                    </MetaButtonsWrapper>
                </Meta>
            </MetaWrapper>
        </CardWrapper>
    );
}

export default Card