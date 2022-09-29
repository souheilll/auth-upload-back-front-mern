import { Add_Article, GET_ARTICLES } from "./const";

const initState = { articles: [], article: null };

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ARTICLES: return { ...state, articles: action.payload };
        case Add_Article: return { ...state, article: action.payload };
        default: return state;
    }
}

export default articleReducer