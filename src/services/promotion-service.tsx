import { GLOBAL_URLS } from "./service";
import Service from "./service";
import { PromotionDTO } from "../model/PromotionDTO";

const PROMOTION_URL = GLOBAL_URLS.SERVER + "/promotion"

export default class PromotionService {

    static getAll = ():Promise<PromotionDTO[]> => {
        return fetch(PROMOTION_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as PromotionDTO[];
        });
    }

    static save = (name: string, visible: boolean):Promise<PromotionDTO> => {
        let json = {
            name: name,
            visible: visible
        };

        return fetch(PROMOTION_URL, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as PromotionDTO;
        });
    }

    static delete = (id: number):Promise<null> => {
        return fetch(PROMOTION_URL+"/"+id, {
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

    static edit = (id:number, name: string, visible: boolean):Promise<PromotionDTO> => {
        let json = {
            id: id,
            name: name,
            visible: visible
        };

        return fetch(PROMOTION_URL, {
            method: 'PUT',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as PromotionDTO;
        });
    }

}