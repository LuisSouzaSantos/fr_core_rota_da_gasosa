import { FlagDTO } from "../model/FlagDTO";
import { GLOBAL_URLS } from "./service";
import Service from "./service";

const FLAG_URL = GLOBAL_URLS.SERVER + "/flag"

export default class FlagService {

    static getAll = ():Promise<FlagDTO[]> => {
        return fetch(FLAG_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as FlagDTO[];
        });
    }

    static save = (name: string, visible: boolean):Promise<FlagDTO> => {
        let json = {
            name: name,
            visible: visible
        };

        return fetch(FLAG_URL, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as FlagDTO;
        });
    }

    static delete = (id: number):Promise<null> => {
        return fetch(FLAG_URL+"/"+id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return null;
        });
    }

    static edit = (id:number, name: string, visible: boolean):Promise<FlagDTO> => {
        let json = {
            id: id,
            name: name,
            visible: visible
        };

        return fetch(FLAG_URL, {
            method: 'PUT',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as FlagDTO;
        });
    }

}