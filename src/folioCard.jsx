import React from 'react';
import styled from 'styled-components';
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props){
    let p = "" //Usado no botão de código pra dizer privado ou não
    let v = "";
    const breakpoints = [48, 64]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}em)`
    )

    const MetaWrapper = styled.div`
        position: absolute;
        right: -5px;
        bottom: -15px;
        width: 95%;
        max-height: 105%;
        overflow: auto;

        ${mq[1]}{
            transform: scale(0);
            transform-origin: 50% 50%;
            transition: all 100ms ease-out;
            visibility: hidden;
        }

        &::-webkit-scrollbar{
            width: 0.25rem;
            height: 0.25rem;
        }

        &::-webkit-scrollbar-track{
            background: #000000;
        }

        &::-webkit-scrollbar-thumb{
            background: #f3f3f3;
        }
    `

    const CardWrapper = styled.div`
        position: relative;
        margin: 20px auto;
        width: 95%;

        ${mq[1]}{
            &:hover {
                cursor: pointer;

                & ${MetaWrapper} {
                    transform: scale(1);
                    transition: all 200ms cubic-bezier(0.785, 0.010, 0.000, 1.415);
                    visibility: visible;
                }
            } 
        }
    `
    const CardImage = styled.img`
        width: 95%;
        display: block;
        height: auto;
        object-fit: cover;
        transition: all 200ms cubic-bezier(0.785, 0.010, 0.000, 1.415);
    `
    
    const Meta = styled.div`
        background: rgba(0, 0, 0, 0.9);
        padding: 15px 15px 10px;
        color: white;
        width: 100%;
    `
    const MetaHeader = styled.div`
        text-decoration: none;
        color: #f3f3f3;
        font-size: 1.3em;
        text-transform: uppercase;
        display:flex;
        justify-content: space-between;
    `
    const MetaHeaderItem = styled.span`
        display: block;
    `
    const MetaRole = styled.div`
        width: 50%;
    `
    const MetaToolsWrapper = styled.div`
        padding: 10px 0;
        width: 100%;
    `
    const Tool = styled.span`
        padding: 5px;
        background: #575151;
        border-radius: 1px;
        margin-right: 8px;
        font-size: .8em;
        line-height: 3em;

        ${mq[1]}{
            font-size: 1em;
        }
    `
    const MetaButtonsWrapper = styled.div`
        padding: 5px 0;
        margin: 0 auto;
        width: auto;
    `
    const Button = styled.a`
        pointer-events: ${props => props.private ? "none" : "auto"};
        cursor: ${props => props.private ? "default" : "pointer"};
        padding: 6px;
        text-decoration: none;
        background: #f3f3f300;
        border-radius: 1px;
        margin-right: 8px;
        font-size: .9em;
        border: solid 1px #f3f3f3;
        color: #f3f3f3;
        transition: ease-in-out 0.3s;

        opacity: ${props => props.private ? "0.4" : "1"};

        ${mq[1]}{
            font-size: 1.1em;
        }

        &:hover{
            background: ${props => props.private ? "#f3f3f300" : "#f3f3f3"};
            color: ${props => props.private ? "#f3f3f3" : "#000000"};
        }
    `
    const Tools = props.tools

    if(!props.source){
        p = "Privado"
    }

    return(
        <CardWrapper>
            <CardImage src={props.img} alt={props.alt}/>
            <MetaWrapper visible={v}>
                <Meta>
                    <MetaHeader>
                        <MetaHeaderItem>{props.projeto}</MetaHeaderItem>
                        <MetaHeaderItem>{props.ano}</MetaHeaderItem>
                    </MetaHeader>
                    <MetaRole>{props.role}</MetaRole>
                    <MetaToolsWrapper>
                        {Tools.map((tool)=><Tool key={tool}>{tool}</Tool>)}
                    </MetaToolsWrapper>
                    <MetaButtonsWrapper>
                        <Button target="_blank" href={props.demo}><FontAwesomeIcon icon={faEye}/> Demo</Button>
                        <Button private={p} target="_blank" href={props.source}><FontAwesomeIcon icon={faCode}/> Código {p}</Button>
                    </MetaButtonsWrapper>
                </Meta>
                <span>
                </span>
            </MetaWrapper>
        </CardWrapper>
    );
}

export default Card