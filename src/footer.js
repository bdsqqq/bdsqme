import React from 'react';
import styled from 'styled-components'

function Footer(){

    const FooterWrapper = styled.div`
        margin: 10vh auto 15px;
        position: relative;
        width: 90%;
        color: rgba(255,255,255,.5);
        font-size: 13px;
        text-align: center;
    `

    return(
        <FooterWrapper>
                <span>Igor Bedesqui - Desenvolvedor Web | igorbedesqui@gmail.com | 11 96132-1158</span>
        </FooterWrapper>
    );
}

export default Footer