import { CredentialsType } from "./CredentailsType";

export class LoginDTO{

    private username: String;
    private password: String;
    private credentialsType: CredentialsType;
    private token: String;

    constructor(username: String, password: String, credentialsType: CredentialsType, token: String){
        this.username = username;
        this.password = password;
        this.credentialsType = credentialsType;
        this.token = token;
    }

    getUsername(): String {
        return this.username;
    }

    getPassword(): String {
        return this.password;
    }

    getCredentials(): CredentialsType {
        return this.credentialsType;
    }

    getToken(): String {
        return this.token;
    }

}