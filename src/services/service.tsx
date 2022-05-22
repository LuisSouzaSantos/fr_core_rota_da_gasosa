
export const GLOBAL_URLS = { 
    SERVER: "http://localhost:8080"
}

export default class Service {

    static getToken = () => {
        let token = localStorage.getItem('key');
        return token === null ? '' : token;
    }

}