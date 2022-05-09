
export const GLOBAL_URLS = { 
    SERVER: "http://rotadagasosaapplication-env.eba-pwgup2ig.sa-east-1.elasticbeanstalk.com/"
}

export default class Service {

    static getToken = () => {
        let token = localStorage.getItem('key');
        return token === null ? '' : token;
    }

}