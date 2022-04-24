import React from "react";
import registerStyles from './Register.module.css';
import { Link } from "react-router-dom";


class RegisterAccount extends React.Component {
    
    render() {

        return (
            <div className={registerStyles.registerContainer}>
                <div className={registerStyles.formContainer}>
                    <div>
                        <button className={registerStyles.buttonReturn}><Link to={"/"}>Voltar</Link></button>
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
                            <input placeholder="Digite sua senha..." type="text" required/>
                            <input placeholder="Digite sua senha..." type="text" required/>
                            <input placeholder="Digite sua senha..." type="text" required/>
                            <input placeholder="Digite sua senha..." type="password" required/>
                        </form>
                    </div>
                    <div>
                        <button className={registerStyles.buttonRegister}><Link to={"/"}>Cadastrar</Link></button>
                    </div>
                </div>    
            </div>
        )
    }
}

export default RegisterAccount;