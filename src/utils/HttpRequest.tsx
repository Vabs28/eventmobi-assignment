import axios from 'axios';

interface GetRequestTypes {
    url: string,
    params?: object
}

class HttpRequest {
    constructor() {
        axios.defaults.baseURL = 'https://api.github.com';
        // Uncomment below line if we need to use API using Authorization tokens
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.common['Accept'] = 'application/vnd.github+json';
        axios.defaults.timeout = 10000;
    }
    
    async get(request: GetRequestTypes) {
        return await axios.get(`${request.url}`, {
            params: { ...request.params }
        });
    }
}
const httpRequest = new HttpRequest();
export default httpRequest;