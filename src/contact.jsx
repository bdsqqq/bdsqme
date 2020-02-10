import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function Contact(){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data, "ERROS", errors);

    const ContatoWrapper = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        width: 340px;
        margin: 6em auto;
    `
    const FormWrapper = styled.div`
        width: 340px;
        height: auto;
        background: #3f3b3bde;
        border-radius: 8px;
        box-shadow: 0 0 40px -10px #000;
        margin: auto;
        padding: 20px 30px;
        max-width: calc(100vw - 40px);
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        position: relative;
    `
    const FormInputLabel = styled.label`
        &:before{
            content: attr(name);
            display: block;
            margin: 28px 0 0;
            font-size: 14px;
            color: #5a5a5a
        }
            
    `
    const FormInput = styled.input`
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background: none;
        outline: none;
        resize: none;
        border: 0;
        font-family: 'Montserrat', sans-serif;
        transition: all .3s;
        border-bottom: 2px solid #bebed2;
        color: #000;

        &:focus{
            border-bottom: 2px solid #78788c;
        }
    `
    const FormTextArea = styled.textarea`
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        background: none;
        outline: none;
        resize: none;
        border: 0;
        font-family: 'Montserrat', sans-serif;
        transition: all .3s;
        border-bottom: 2px solid #bebed2;
        color: #000;

        &:focus{
            border-bottom: 2px solid #78788c;
        }
    `
    const FormButton = styled.input`
        cursor: pointer;

        text-align: center;
        color: #0000007c;
        font-size: 1.2rem;
        font-family: 'montserrat';
        font-weight: 300;
        letter-spacing: .3rem;

        padding: .4em;
        height: 3rem;
        width: 100%;
        background-color: #f9ca24;
        margin: 2em auto;
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.3);
        border: none;
        transition: 0.3s ease-in-out;
        
        &:hover{
            opacity: 0.8;
        }
        &:disabled{
            opacity: 0.5;
        }
    `
    const FormAviso = styled.span`
        font-size: .8em;
        color: #eb4d4b;
        opacity: .8;
    `

    return(
    <ContatoWrapper>
        <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <FormInputLabel name="Nome"></FormInputLabel>
            <FormInput 
                type="text" 
                placeholder="Nome" 
                name="Nome"  
            />
            
            

                <FormButton type="submit" value="ENVIAR!"/>
            </form>
        </FormWrapper>

        
    </ContatoWrapper>
    
    );
}

export default Contact