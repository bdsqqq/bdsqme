import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

import "./styles.css";

export default function App() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => console.log(data);
  console.log("ERROS",errors);
  const inputs = {
    "nome" : document.getElementById("inputNome"), 
    "email" : document.getElementById("inputEmail"), 
    "mensagem" : document.getElementById("inputMensagem")
  }

  const pintarInput = (errorsdot, inputsdot) => {
    if(errorsdot){
      inputsdot.classList.add("input__error");
    }else{
      inputsdot.className = "";
    }
  }
 
  if(formState.submitCount > 0){
    pintarInput(errors.nome, inputs.nome);
    pintarInput(errors.email, inputs.email);
    pintarInput(errors.mensagem, inputs.mensagem);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Me fala um pouco sobre sua idéia, podemos torna-la realidade juntos!</h2>
      <label>Nome</label>
      <input id="inputNome" name="nome" ref={register({ required: "Digite seu nome" })} />
      

      <label>Email</label>
      <input
        id="inputEmail"
        name="email"
        ref={register({
          required: "Digite um email válido.",
          pattern: /^\S+@\S+$/i
        })}
      />
      

      <label>Mensagem</label>
      <textarea
        id="inputMensagem"
        name="mensagem"
        ref={register({ required: true, maxLength: 5000 })}
      />
      
      <input type="submit" value="Enviar"/>
    </form>
  );
}
