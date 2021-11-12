import React from 'react';
import LoginButton from './LoginButton';


export default props =>
<>
<form>
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" className="form-control" placeholder="Usuário"/>
            
        </div>
        <div className="input-group form-group">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <input type="password" className="form-control" placeholder="Senha"/>
        </div>
        <div className="row align-items-center remember">
            <input type="checkbox"/>Lembrar de Mim
        </div>
        <div className="form-group">
        <LoginButton/>
        </div>
    </form>
    
</>


