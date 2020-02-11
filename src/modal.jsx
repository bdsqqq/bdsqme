import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Contact from './contactTest'

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 220vw;
    height: 220vh;
    background-color: #000;
    opacity: .7;
    overflow-x: hidden;
    overflow-y: hidden;
`
const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1050;
    max-width: 500px;
    max-height: 90vh;
    margin: 1.75rem auto;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`
const ModalBox = styled.div`
    z-index: 1060;
    background: #3f3b3b;
    position: relative;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
`
const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`
const ModalCloseButton = styled.button`
    font-size: 1.6rem;
    font-weight: 100;
    line-height: 1;
    color: #f3f3f3;
    opacity: .7;
    cursor: pointer;
    border: none;
    background-color: #3f3b3b;
`

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalOverlay data-dismiss="modal" onClick={hide}/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <ModalBox>
        <ModalHeader>
          <ModalCloseButton type="button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </ModalCloseButton>
        </ModalHeader>
        <Contact/>
      </ModalBox>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;