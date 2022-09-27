import React, { useEffect, useState } from 'react';
import CustomCard from '../../Components/Card/CustomCard';
import classes from './Home.module.css';
import Spinner from 'react-bootstrap/Spinner';
//import axios from 'axios';
import { useSelector } from 'react-redux';
import { getArticle } from '../../Redux/article/articleAction';
import { useDispatch } from 'react-redux';



function Home() {
    const article = useSelector(state => state.articleReducer);
    const items = article.articles;

    //const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = setTimeout(() => {
            dispatch(getArticle())
            setLoading(false);
            // axios.get('http://localhost:1234/api/all-article')
            //     .then(res => {
            //         setItems(res.data.articles);
            //     }).catch(e => {
            //         throw (e.message);
            //     }).finally(() => {
            //         setLoading(false);
            //     });
        }, 2000)
        return () => clearTimeout(fetchData);
    }, [dispatch]);

    return (
        <div>
            <h1> all articles</h1>
            <div className={classes.item}>
                {loading && <div><Spinner animation="grow" size="sm" />
                    <Spinner animation="grow" /></div>}
                {items.map(item => <CustomCard key={item._id} item={item} operation={'getItems'} />)}
            </div>
        </div>
    )
}
export default Home