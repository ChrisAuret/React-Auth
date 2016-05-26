// With redux-thunk, not limited to a single action but can dispatch as many as i want
import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    console.log('zzzzzzz');
    return function() {
        axios.post(`${ROOT_URL}/signin`, { email, password })
    }
}