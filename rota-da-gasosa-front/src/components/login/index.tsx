import React from "react";
import HARICH from './Login.module.css';
import logo from '../../assets/images/rota-icone.png'; 

class Login extends React.Component {
    
    render() {

        return (
            <div className={HARICH.container}>
                <div className={HARICH.inputContainer}>
                <div className="logo-container">
                        <img  className={HARICH.logoContainer} alt="Rota Da Gasosa" src={logo}/> Rota Da Gasosa
                        
                    </div>
                    <div className="form-container">
                        <form>
                            <input placeholder="Digite seu CPF/CNPJ..." type="text" />
                            <input placeholder="Digite sua senha..." type="text" />
                        </form>
                    </div>
                    <p><a>Esqueci minha senha</a></p>
                    <div className="button-container">
                        <button className="button-login">LOGIN</button>
                    </div>
                    <p>Não tem conta? <a>Cadastre-se</a></p>  
                </div>
            </div>
        )
    }
}

export default Login;