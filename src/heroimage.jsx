import React from 'react'
import styled from 'styled-components'


function HeroImage(props){
    const size = props.size;
    const photoURL = props.photoURL;
    const transparency = props.transparency;

    const HeroImage = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        height: ${size}vh;
        width: 100%;
        z-index: -20;

        background:linear-gradient(0deg,rgba(0,0,0,${transparency}),rgba(0,0,0,0.3)),url('${photoURL}');
        
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    `

    
    return(
        <div>
            <HeroImage />
        </div>
        
    )
}

export default HeroImage