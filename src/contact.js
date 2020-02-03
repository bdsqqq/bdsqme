import React from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

function Contact(){
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    console.log(watch('example')) // watch input value by passing the name of it

    return(
       
    <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="example" defaultValue="test" ref={register} />
      
     
      <input name="exampleRequired" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    );
}

export default Contact