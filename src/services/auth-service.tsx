import { LoginDTO } from "../model/LoginDTO";
import { GLOBAL_URLS } from "./service";


const AUTH_URL = GLOBAL_URLS.SERVER + "/auth"

export default class AuthService {

    static authetication = (loginDTO: LoginDTO): Promise<LoginDTO> => {
        return fetch(AUTH_URL+"/authentication", {
            method: 'POST',
            body: JSON.stringify(loginDTO),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        }).then(response => {
            return response.json() as unknown as LoginDTO;
        });
    }

}