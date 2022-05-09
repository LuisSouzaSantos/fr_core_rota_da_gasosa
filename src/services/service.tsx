export default class Service {

    static getToken = () => {
        let token = localStorage.getItem('key');
        return token === null ? '' : token;
    }

}