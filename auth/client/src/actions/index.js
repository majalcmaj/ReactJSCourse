import axios from 'axios';
import {AUTH_USER, AUTH_ERROR} from './types';
const ROOT_URL = "http://localhost:13080"

export function signInUser({email, password}, history) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/SignIn`, {email, password})
        .then( response => {
            dispatch({type: AUTH_USER});
            localStorage.setItem('token', response.data.token);
            history.push('/feature');
        })
        .catch(() => {
            dispatch(authError("Bad login info"));            
        });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}