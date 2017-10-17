import axios from 'axios';

const ROOT_URL = "http://localhost:3090"

export function signInUser({email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/SignIn`, {email, password}).then(
            
        );
    }
}