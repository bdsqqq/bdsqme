import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./styles.css";
import useInterval from './useInterval'

const axios = require('axios');


export default function App() {
  const [i, setI] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [buttonSendStatus, setButtonSendStatus] = useState("Enviar");
  const [formStatus, setFormStatus] = useState("idle");
  const [buttonSendClass, setButtonSendClass] = useState("")

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });

  const zeroTo = (input, maxValue ) => {
    if(input < maxValue){
        return input+1;
    }else{
        return 0;
    }
  }

  const dotList = ["enviando.", "enviando..", "enviando..." ];

  const change = () => setI(zeroTo(i, dotList.length-1));

  useInterval(() => {
    if(formStatus === "sending"){
      change();
      setButtonSendStatus(dotList[i]);
    }
    console.log(i)
  }, delay);

  const onSubmit = data => {
    setFormStatus("sending");
    setButtonSendClass("")
    inputs.submit.disabled = true;
    console.log(data);
    axios.post('https://api.igorbedesqui.com/send/mail', data)
    .then(function (response) {
      setDelay(null);
      setButtonSendClass("button__success")
      setFormStatus("success");
      setButtonSendStatus("Enviado!");
      console.log(response);
    })
    .catch(function (error) {
      setFormStatus("error");
      setButtonSendClass("button__error")
      setButtonSendStatus("Tente novamente");
      inputs.submit.disabled = false;
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
        
        <input type="submit" value={buttonSendStatus} className={buttonSendClass} id="inputSubmit"/>
      </form>
    </div>
  );
}