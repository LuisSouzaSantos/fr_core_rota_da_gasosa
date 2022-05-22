import { GLOBAL_URLS } from "./service";
import Service from "./service";
import { ServiceDTO } from "../model/Service";

const SERVICE_URL = GLOBAL_URLS.SERVER + "/service"

export default class ServiceService {

    static getAll = ():Promise<ServiceDTO[]> => {
        return fetch(SERVICE_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as ServiceDTO[];
        });
    }

    static save = (name: string, visible: boolean):Promise<ServiceDTO> => {
        let json = {
            name: name,
            visible: visible
        };

        return fetch(SERVICE_URL, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as ServiceDTO;
        });
    }

    static delete = (id: number):Promise<null> => {
        return fetch(SERVICE_URL+"/"+id, {
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

    static edit = (id:number, name: string, visible: boolean):Promise<ServiceDTO> => {
        let json = {
            id: id,
            name: name,
            visible: visible
        };

        return fetch(SERVICE_URL, {
            method: 'PUT',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as ServiceDTO;
        });
    }

}