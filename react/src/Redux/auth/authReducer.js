import { LOGIN, LOG_OUT, SING_UP } from './const';
const initState = { user: null, isAuth: false };

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
        case SING_UP:
            localStorage.setItem('token', action.payload.token);
            return { ...state, user: action.payload.user, isAuth: true }

        case LOG_OUT:
            localStorage.clear();
            return { user: null, isAuth: false }
        default: return state;
    }
}
export default authReducer