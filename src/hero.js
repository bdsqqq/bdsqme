import React, { useState, useEffect, useRef  } from 'react'
import styled from 'styled-components'

function Hero(){
    const [i, setI] = useState(0);
    const [delay, setDelay] = useState(3000);

    const adjList = ["Incrível.", "Único.", "Novo.", "Original."];
    const adjLength = adjList.length
    const zeroTo = (input, maxValue ) => {
        if(input < maxValue){
            return input+1;
        }else{
            return 0;
        }
    }

    const muda = () => setI(zeroTo(i, adjLength-1));

    useInterval(() => {
        muda();
    }, delay);

    const breakpoints = [48, 64]

    const mq = breakpoints.map(
        bp => `@media (min-width: ${bp}em)`
    )

    const Wrapper = styled.div`
        margin: 4em 2em;

        ${mq[0]}{
            margin: 6em 4em;

            max-width: 60%;
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

        transition-property: background, color, border-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;

        ${mq[0]}{
            width: 60%;
        }
    `
    return(
        <Wrapper>
            <Title>Desenvolvedor Web Fullstack pronto para criar algo <Highlight>{adjList[i]}</Highlight></Title>
            <Text>Criação de Sites e Serviços de alta qualidade com design inovador, diferenciando-o dos concorrentes, trazendo mais credibilidade para sua marca e gerando resultados para seu projeto. <TextHighlight>Você está preparado para isso?</TextHighlight></Text>
            <Button>Sim, Estou preparado</Button>
        </Wrapper>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

export default Hero