import React, { useState, useEffect, useRef  } from 'react'
import { useForm } from "react-hook-form";
import "./styles.css";
const axios = require('axios');


export default function App() {
  const [buttonSendStatus, setButtonSendStatus] = useState("Enviar");

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  const onSubmit = data => {
    setButtonSendStatus("Enviando.");
    inputs.submit.disabled = true;
    console.log(data);
    axios.post('https://api.igorbedesqui.com/send/mail', data)
    .then(function (response) {
      setButtonSendStatus("Enviado!");
      console.log(response);
    })
    .catch(function (error) {
      inputs.submit.disabled = false;
      setButtonSendStatus("Tente novamente");
      console.log(error);
    });
  };
  
  const inputs = {
    "nome" : document.getElementById("inputName"), 
    "email" : document.getElementById("inputEmail"), 
    "mensagem" : document.getElementById("inputMessage"),
    "submit" : document.getElementById("inputSubmit")
  }

  const pintarInput = (condition, inputsdot, classToAddError, classToAddSuccess ) => {
    if(condition && classToAddError){
      inputsdot.classList.add(classToAddError);
    }else{
      if(classToAddSuccess){
        inputsdot.classList.remove(classToAddError);
        inputsdot.classList.add(classToAddSuccess);
      }else{
        inputsdot.className = "";
      }
    }
  }
 
  if(formState.submitCount > 0){
    pintarInput(errors.inputName, inputs.nome, "input__error", "input__success");
    pintarInput(errors.inputEmail, inputs.email, "input__error", "input__success");
    pintarInput(errors.inputMessage, inputs.mensagem, "input__error", "input__success");
  }

  return (
    <div id="modal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="formTitle">Me fala um pouco sobre sua idéia, podemos torna-la realidade juntos!</h2>
        <label>Nome</label>
        <input id="inputName" name="inputName" ref={register({ required: "Digite seu nome" })} />
        

        <label>Email</label>
        <input
          id="inputEmail"
          name="inputEmail"
          ref={register({
            required: "Digite um email válido.",
            pattern: /^\S+@\S+$/i
          })}
        />
        

        <label>Mensagem</label>
        <textarea
          id="inputMessage"
          name="inputMessage"
          ref={register({ required: true, maxLength: 5000 })}
        />
        
        <input type="submit" value={buttonSendStatus} id="inputSubmit"/>
      </form>
    </div>
  );
}