import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import styled from "styled-components";

import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome</label>
      <input name="nome" ref={register({ required: "This is required." })} />
      <ErrorMessage errors={errors} name="nome">
        {({ message }) => <p>{message}</p>}
      </ErrorMessage>

      <label>Email</label>
      <input
        name="email"
        ref={register({
          required: "Digite um email válido.",
          pattern: /^\S+@\S+$/i
        })}
      />
      <ErrorMessage errors={errors} name="email">
        {() => <p>Digite um email válido.</p>}
      </ErrorMessage>

      <label>Mensagem</label>
      <input
        name="mensagem"
        ref={register({ required: true, maxLength: 10 })}
      />
      <ErrorMessage errors={errors} name="email">
        {() => <p>Digite um email válido.</p>}
      </ErrorMessage>
      <input type="submit" />
    </form>
  );
}
