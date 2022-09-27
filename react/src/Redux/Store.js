import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import adminReducer from './admin/adminReducer';
import articleReducer from './article/articleReducer';
import thunk from 'redux-thunk'


const store = createStore(combineReducers({ authReducer, adminReducer, articleReducer }), compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store