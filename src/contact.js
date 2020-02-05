import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function Contact(){
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it

    const ContatoWrapper = styled.div`
        position: fixed;
        left: 0;
        right: 0;
        width: 340px;
        margin: calc(50vh - 220px) auto;
    `
    const FormWrapper = styled.div`
        width: 340px;
        height: auto;
        background: #fefefede;
        border-radius: 8px;
        box-shadow: 0 0 40px -10px #000;
        margin: auto;
        padding: 20px 30px;
        max-width: calc(100vw - 40px);
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        position: relative;
    `
    const FormInputWrapper = styled.p`
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
    const FormButton = styled.input`
        cursor: pointer;

        text-align: center;
        color: #0000007c;
        font-size: 1.2rem;
        font-family: 'lora';

        padding: .4em;
        margin: 2em;
        height: 3rem;
        width: 100%;
        background-color: #f9ca24;
        margin: auto;
        box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.3);
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
        
                <FormInputWrapper name="Nome">
                    <FormInput name="Nome"  ref={register({ required: true })}/>
                </FormInputWrapper>

                {errors.Nome && <FormAviso>É necessário informar seu nome</FormAviso>}

                <FormButton type="submit" />
            </form>
        </FormWrapper>
    </ContatoWrapper>
    
    );
}

export default Contact