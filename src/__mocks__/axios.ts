const axios = {
    get: jest.fn((url): Promise<object> => {
        return Promise.reject({
            data: 'error'
        });
    }),
    defaults:{
        baseURL: 'https://api.github.com',
        headers: {
            common: {
                Accept: 'application/vnd.github+json'
            }
        }
    }
};
export default axios;