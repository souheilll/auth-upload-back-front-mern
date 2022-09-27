import axios from "axios";
const url = 'http://localhost:1234/api';


export const fetchData = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/all-article`).then((suc) => {
            resolve(suc.data);
        }).catch((e) => {
            reject(e);
        });
    });
}

export const addArticle = (formData, token) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            axios.post(`${url}/add-article`, formData, {
                headers: {
                    token
                }
            }).then(suc => {
                resolve(suc.data);
            }).catch(e => {
                reject(e);
            })
        }, 2000);
        return () => {
            clearTimeout(timer);
        }
    })
}




