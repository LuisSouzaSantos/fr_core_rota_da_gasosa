import React from "react";
import registerStyles from './Register.module.css';
import { Link } from "react-router-dom";


class RegisterAccount extends React.Component {
    
    render() {

        return (
            <div className={registerStyles.registerContainer}>
                <div className={registerStyles.formContainer}>
                    <div className={registerStyles.buttonReturn}>
                        <button><Link to={"/"}>Voltar</Link></button>
                    </div>
                    <div className={registerStyles.register}>Cadastro</div>
                    <div className={registerStyles.registerForm}>
                        <form>
                            <label htmlFor="profile" className={registerStyles.registerProfile}>Selecione o perfil:  </label>
                            <select name="profile" id="profile" required>
                                <option value="registerCNPJ">CNPJ</option>
                                <option value="registerCPF">CPF</option>
                            </select>


                            <input placeholder="Digite o nome completo" type="text" required/>
                            <input placeholder="E-mail" type="email" required/>
                            <input placeholder="Digite o CEP" type="text" required/>
                            <input placeholder="Endereço" type="text" required/>
                            <input placeholder="Número" type="text" required/>
                            <input placeholder="Telefone" type="text"/>
                            <input placeholder="Digite sua senha..." type="password" required/>
                        </form>
                    </div>
                    <div className={registerStyles.buttonRegisterContainer}>
                        <button className={registerStyles.buttonRegister}><Link to={"/"}>Cadastrar</Link></button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default RegisterAccount;