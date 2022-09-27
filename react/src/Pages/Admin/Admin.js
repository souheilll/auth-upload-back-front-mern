import React, { useEffect, useState } from 'react';
import CustomCard from '../../Components/Card/CustomCard';
import axios from 'axios';
import classes from './Admin.module.css'
import Spinner from 'react-bootstrap/esm/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const config = {
        headers: {
            token: localStorage.getItem('token')
        }
    }
    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:1234/api/admin', config).then((res) => {
                setUsers(res.data.users);
                setLoading(false)
            }).catch((e) => {
                setLoading(false)
                navigate('/');
                toast.error(e.response.data.msg, { theme: 'dark' })

            });
        }, 2000);
    }, [])
    return (
        <div>
            <h1> all users </h1>
            {loading && <div>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </div>}
            <div className={classes.user}>
                {users.map(item => <CustomCard key={item._id} item={item} operation={'getUsers'} />)}
            </div>
        </div>
    )
}
export default Admin