import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function Contact(){
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it


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
        color: #fefefe;

        &:focus{
            border-bottom: 2px solid #78788c;
        }
    `
    return(
       
    <form onSubmit={handleSubmit(onSubmit)}>
   
        <input name="example" defaultValue="test" ref={register} />

        <input name="exampleRequired" ref={register({ required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
      
        <FormInputWrapper>
            <FormInput name="Nome" defaultValue="" ref={register}/>
        </FormInputWrapper>

        <input type="submit" />
    </form>
    );
}

export default Contact