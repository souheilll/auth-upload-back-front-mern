import axios from 'axios';
const url = 'http://localhost:1234/api'


export const postLogin = (userInfo) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/login`, userInfo)
            .then((suc) => {
                resolve(suc.data);
            })
            .catch((err) => {
                reject(err);
            })
    })
};

export const signup = (userInfo) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}/sign-up`, userInfo).then((suc) => {
            resolve(suc.data);
        }).catch((err) => {
            reject(err);
        })
    })
};