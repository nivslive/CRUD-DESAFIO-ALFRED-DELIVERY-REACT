import React from 'react';
import LoginButton from './LoginButton';
import { useForm } from "react-hook-form";

const Form = () => {

    const defaultValues = {
        username: "",
        password: "",
    }

    const { register, handleSubmit, formState: { errors } } = useForm({defaultValues});
    const onSubmit = data => console.log(data);
  
return  (
<>
<form>
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" {...register('username', {required: true, maxLenght: 30})} className="form-control" placeholder="Usuário"/>
            {errors.name && errors.name.type === "required" && <span>Dado de Usuário requerido.</span>}
            
        </div>
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input  {...register('password', {required: true, maxLenght: 30})} type="password" className="form-control" placeholder="Senha"/>
            {errors.name && errors.name.type === "required" && <span>Senha de Usuário requerida.</span>}
        </div>
        <div className="row align-items-center remember">
            <input type="checkbox"/>Lembrar de Mim
        </div>
        <div className="form-group">
        <LoginButton/>
        </div>
    </form>
    
</>

)}

export default Form;