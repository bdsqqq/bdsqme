import React, { useEffect, useState }  from 'react';
import { useForm } from "react-hook-form";

import db from '../../firebase';


const Dashboard = () => {

    const [ano, setAno] = useState()

    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    });

    const onSubmit= data => {
        setAno(data.ano)
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Titulo</label>
                <input ref={register()} name="title" type="text"/>

                <label htmlFor="ano">Ano</label>
                <input ref={register()} name="ano" type="text"/>
                <button type="submit">Enviar</button>
            </form>

        <h2>{ano}</h2>
        </div>
    );
}

export default Dashboard