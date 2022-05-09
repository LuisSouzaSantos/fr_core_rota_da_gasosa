import { FlagDTO } from "../model/FlagDTO";
import { LoginDTO } from "../model/LoginDTO";
import Service from "./service";

const GLOBAL_URL = "http://localhost:8080";
const AUTH_URL = GLOBAL_URL + "/flag"

export default class FlagService {

    static getAll = ():Promise<FlagDTO[]> => {
        return fetch(AUTH_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as FlagDTO[];
        });
    }

}