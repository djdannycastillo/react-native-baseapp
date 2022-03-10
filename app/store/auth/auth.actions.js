import api from '@services/api';
import { isLoading, loginSuccess, loginFailed, logoutSuccess } from './auth.slice'

export const login = ({username, password}) => async (dispatch) => {
    try {
        dispatch(isLoading());
        //const resp = await api(`login?username=${username}&password=${password}`);
        const resp = {firstName: 'John', lastName: 'Doe', sessionToken: 'abc123456'};
        dispatch(loginSuccess({ user: resp }));
        
    } catch (error) {
        console.log('error', error);
        dispatch(loginFailed({ error }));
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch(isLoading());
        dispatch(logoutSuccess());
        
    } catch (error) {
        console.log('error', error);
        dispatch(logoutSuccess());
    }
}