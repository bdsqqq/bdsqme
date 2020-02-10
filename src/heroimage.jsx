import React from 'react'
import styled from 'styled-components'


function HeroImage(props){
    const size = props.size;
    const photoURL = props.photoURL;

    const HeroImage = styled.div`
        position: absolute;
        height: ${size}vh;
        width: 100%;
        z-index: -1;

        background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('${photoURL}');
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    `


    return(
        <HeroImage></HeroImage>
    )
}

export default HeroImage