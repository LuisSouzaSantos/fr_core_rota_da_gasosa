import { FlagDTO } from "../model/FlagDTO";
import { GLOBAL_URLS } from "./service";
import Service from "./service";

const AUTH_URL = GLOBAL_URLS.SERVER + "/flag"

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