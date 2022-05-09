import React from "react";
import loginStyles from './Login.module.css';
import logo from '../../assets/images/rota-icone1.png'; 
import { Link } from "react-router-dom";
import { LoginDTO } from "../../model/LoginDTO";
import AuthService from "../../services/auth-service";
import { CredentialsType } from "../../model/CredentailsType";

class Login extends React.Component<{}, {username: string, password: string}> {

    constructor(props: any) {
        super(props);

        this.state = {
            username: '', 
            password: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication = (event: any) => {
        let login = new LoginDTO(this.state.username, this.state.password, CredentialsType.ADMINISTRATOR, "");

        AuthService.authetication(login).then((result: any) => {
            localStorage.setItem('key', 'Bearer '+result.token)
            window.location.href = "/admin/menu";
        }, (error) => {
            console.log(error);
        })

        event.preventDefault();
    }

    handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({username: event.target.value})
    }

    handlePassword  = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value})
    }

    render() {

        return (
            <div className={loginStyles.loginContainer}>
                <div className={ loginStyles.formContainer}>
                    <div className={loginStyles.logoContainer} >
                        <img className={loginStyles.logo} alt="Rota Da Gasosa" src={logo} /> <span className={loginStyles.logoText}>Rota Da Gasosa</span> 
                    </div>
                    <div >
                        <form>
                            <input placeholder="Digite seu CPF/CNPJ..." type="text" onChange={this.handleUsername} required/>
                            <input placeholder="Digite sua senha..." type="password" onChange={this.handlePassword} required/>
                        </form>
                    </div>
                    <p className={loginStyles.recoveryPasswordText}><a>Esqueci minha senha</a></p>
                    <div >
                        <button className={loginStyles.buttonLogin} onClick={this.handleAuthentication}>LOGIN</button>
                    </div>
                    <p className={loginStyles.registerAccount} >Não tem conta? <Link to={"/registerAccount"}>Cadastre-se</Link></p>    
                </div>    
            </div>
        )
    }
}

export default Login;