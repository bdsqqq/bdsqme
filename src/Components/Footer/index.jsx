import React from 'react';
import styled from 'styled-components'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <span>Feito com <FontAwesomeIcon icon={faHeart}/> por <a target="blank" style={{ textDecoration: 'none', color: '#f3f3f3' }} href="https://github.com/bdsqqq">@IgorBedesqui</a>  | igorbedesqui@gmail.com | 11 96132-1158</span>
        </FooterWrapper>
    );
}

export default Footer