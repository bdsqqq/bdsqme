import React from 'react';
import styled from 'styled-components'
import { GoHeart } from "react-icons/go";

const FooterWrapper = styled.div`
        margin: 10vh auto 15px;
        position: relative;
        width: 90%;
        color: rgba(255,255,255,.5);
        font-size: 13px;
        text-align: center;
    `

function Footer(){

    return(
        <FooterWrapper>
                <span>Feito com <GoHeart /> por <a target="blank" style={{ textDecoration: 'none', color: '#f3f3f3' }} href="https://github.com/bdsqqq">@IgorBedesqui</a>  | igorbedesqui@gmail.com | 11 96132-1158</span>
        </FooterWrapper>
    );
}

export default Footer