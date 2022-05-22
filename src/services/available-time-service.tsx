import { GLOBAL_URLS } from "./service";
import Service from "./service";
import { AvailableTimeDTO } from "../model/AvailableTimeDTO";

const AVAILABLE_TIME_URL = GLOBAL_URLS.SERVER + "/availableTime"

export default class AvailableTimeService {

    static getAll = ():Promise<AvailableTimeDTO[]> => {
        return fetch(AVAILABLE_TIME_URL, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            return response.json() as unknown as AvailableTimeDTO[];
        });
    }

    static save = (name: string, visible: boolean):Promise<AvailableTimeDTO> => {
        let json = {
            name: name,
            visible: visible
        };

        return fetch(AVAILABLE_TIME_URL, {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': Service.getToken() as string
            },
        }).then(response => {
            if(!response.ok) { return Promise.reject(response.json()); }
            return response.json() as unknown as AvailableTimeDTO;
        });
    }

}