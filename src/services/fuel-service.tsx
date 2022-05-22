import { GLOBAL_URLS } from "./service";
import Service from "./service";
import { FuelDTO } from "../model/FuelDTO";

const FUEL_URL = GLOBAL_URLS.SERVER + "/fuel"

export default class FuelService {

    static getAll = ():Promise<FuelDTO[]> => {
        return fetch(FUEL_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as FuelDTO[];
        });
    }

    static save = (name: string, visible: boolean):Promise<FuelDTO> => {
        let json = {
            name: name,
            visible: visible
        };

        return fetch(FUEL_URL, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as FuelDTO;
        });
    }

    static delete = (id: number):Promise<null> => {
        return fetch(FUEL_URL+"/"+id, {
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

    static edit = (id:number, name: string, visible: boolean):Promise<FuelDTO> => {
        let json = {
            id: id,
            name: name,
            visible: visible
        };

        return fetch(FUEL_URL, {
            method: 'PUT',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as FuelDTO;
        });
    }

}