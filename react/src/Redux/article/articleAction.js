import { Add_Article, GET_ARTICLES } from "./const";
import * as api from '../../Service/articleApi'


export const getArticle = () => async (dispatch) => {
    try {
        const res = await api.fetchData();
        const article = res.articles;
        dispatch({ type: GET_ARTICLES, payload: article });
    } catch (error) {
        console.log(error);
    }
}
export const addArticle = (formData, token) => async (dispatch) => {
    try {
        const res = await api.addArticle(formData, token);
        console.log(res);
        const item = res.article
        dispatch({ type: Add_Article, payload: item })
    } catch (error) {
        console.log(error);
    }
};