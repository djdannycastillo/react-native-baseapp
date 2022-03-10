import api from "./index";

const interceptors = (store) => {
    const handleRequest = async (request) => {    
        const { sessionToken } = store.getState().auth;
        
        if (sessionToken && sessionToken !== 'null') {
            request.headers['X-Parse-Session-Token'] = sessionToken;
        } else {
            request.headers['X-Parse-Revocable-Session'] = 1;
        }
        return request;
    }
    
    const handleResponse = async (response) => response.data || response;
    
    const handleError = async (error) => {
        const { response } = error
        if (response?.data) 
            return Promise.reject(response.data);
    
        return Promise.reject({code: 408, message: 'Ha ocurrido un error'});
    }
    
    api.interceptors.request.use(handleRequest);
    api.interceptors.response.use(handleResponse, handleError);
}

export default interceptors;