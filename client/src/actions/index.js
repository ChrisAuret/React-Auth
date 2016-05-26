// With redux-thunk, not limited to a single action but can dispatch as many as i want
import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    return function() {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER }) //redux-thunk
                
                //Save JWT token
                localStorage.setItem('token', response.data.token);
                
                browserHistory.push('/feature'); //force navigation
            })
            .catch(() =>  {
                // bad request
                
            })
    }
}