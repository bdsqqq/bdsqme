import React, { useState } from 'react'
import styled from 'styled-components'

import useModal from '../../Hooks/useModal'
import useInterval from '../../Hooks/useInterval'

import Modal from '../Modal'

function Hero(){
    const [i, setI] = useState(0);
    const [delay] = useState(3000);

    const adjList = ["Incrível.", "Único.", "Novo.", "Original."];
    const zeroTo = (input, maxValue ) => {
        if(input < maxValue){
            return input+1;
        }else{
            return 0;
        }
    }

    const change = () => setI(zeroTo(i, adjList.length-1));

    useInterval(() => {
        change();
    }, delay);

    const {isShowing, toggle} = useModal();

    const breakpoints = [48, 64]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}em)`
    )

    const Wrapper = styled.div`
        margin: 4em 2em;

        ${mq[0]}{
            margin: 6em 4em;

            max-width: 55%;
        }
    `
    const Title = styled.span`
        color: #f3f3f3;
        font-size: 2.2em;
        line-height: 1.2em;
        letter-spacing: 1px;
        font-weight: 700;
        font-family: 'Montserrat';

        ${mq[0]}{
            font-size: 4em;
            line-height: 1.2em;
            letter-spacing: 2px; 
        }
    `
    const Highlight = styled.span`
        color: #feb062;
        text-decoration: underline wavy #feb062;
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
    `
    const Text = styled.p`
        margin: 3em 0 1.5em;
        font-size: 20px;
        line-height: 32px;
        font-weight: 300;
        font-family: 'Montserrat';
        color: #f3f3f3;

        ${mq[0]}{
            font-size: 1.4em;
            line-height: 1.2em;
            letter-spacing: 2px;

            max-width: 80%;
        }
    `
    const TextHighlight = styled.span`
        font-weight: 400;
        color: #fff;
    `
    const Button = styled.a`
        cursor: pointer;

        background: #feb062;
        width: 100%;
        display: inline-block;
        text-align: center;
        padding: 15px 25px 14px;
        border: solid 1px #feb062;

        color: #3f3b3b;
        font-size: 1.2em;
        font-weight: 400;
        font-family: 'Montserrat';

        transition-property: background, color, border, opacity;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;

        -webkit-appearance: none;
        
        &:hover {
            opacity: 0.9;
        }

        &:active {
        transition: 0.2s all;
        transform: translateY(3px);
        border: 1px solid transparent;
        opacity: 0.8;
        }

        ${mq[0]}{
            width: 60%;
        }
    `
    return(
        <>
            <Wrapper>
                <Title>Desenvolvedor Web Fullstack pronto para criar algo <Highlight>{adjList[i]}</Highlight></Title>
                <Text>Criação de Sites e Serviços com foco na <TextHighlight>qualidade</TextHighlight>, diferenciando-o dos concorrentes, trazendo mais credibilidade para sua marca e gerando resultados para seu projeto. <TextHighlight>Você está preparado para isso?</TextHighlight></Text>
                <Button onClick={toggle}>Sim, Estou preparado</Button>
            </Wrapper>

            <Modal
                isShowing={isShowing}
                hide={toggle}
            />
        </>
    );
}

export default Hero