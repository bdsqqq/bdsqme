import React from 'react';
import styled from 'styled-components'
import { faLinkedinIn, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {

    const Wrapper = styled.ul`
        list-style-type: none;
        text-decoration: none;
        margin: 1em 1.6em;
        color: #f3f3f3;
        height: 10vh;
        font-size: 1.3em;
        text-transform: uppercase;
    `
    const Logo = styled.li`
        display: inline;
        float: left;
    `
    const NavItem = styled.li`
        display: inline;
        float: right;
        padding: 0 .3em;

        transition-delay: 0s;
        transition-duration: 0.3s;
        transition-property: opacity;

        &:hover{
            opacity: 0.7;
            cursor: pointer;
        }
    ` // O item mais acima é o mais a direita.

  return (
    <Wrapper>
        <Logo>Igor Bedesqui</Logo>
        <NavItem><FontAwesomeIcon icon={faGithub} /></NavItem>
        <NavItem><FontAwesomeIcon icon={faLinkedinIn} /></NavItem>
    </Wrapper>
  );
}

export default Header;
