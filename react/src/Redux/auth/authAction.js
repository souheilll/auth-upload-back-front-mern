import * as api from '../../Service/authApi';
import { LOGIN, LOG_OUT, SING_UP } from "./const";
import { toast } from 'react-toastify';

export const login = (userInfo, navigate) => async (dispatch) => {

    try {
        const res = await api.postLogin(userInfo);
        const { token, user } = res;
        dispatch({ type: LOGIN, payload: { token, user } });
        if (user.role === 1) {
            navigate('/Admin');
        }
        else {
            navigate('/add_item')
        }
    } catch (error) {
        // make a toast
        console.log(error);
        //error.response.data.errors.map(elt => toast.error(elt.msg, { theme: 'dark' }))
    }
}

export const signup = (userInfo, navigate) => async (dispatch) => {
    try {
        const res = await api.signup(userInfo);
        const user = res.newUser;
        const msg = res.msg;
        const token = res.token
        dispatch({ type: SING_UP, payload: { user, token } })
        navigate('/');
        toast.success(msg, { theme: 'dark' })

    } catch (error) {
        error.response.data.errors.map(elt => toast.error(elt.msg, { theme: 'dark' }))
    }
}

export const logout = () => {
    return { type: LOG_OUT }
}