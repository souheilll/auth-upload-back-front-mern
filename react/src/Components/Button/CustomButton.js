import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './CustomButton.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/auth/authAction';


function CustomButton({ action, variant }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (action === 'logout' && localStorage.getItem('token')) {
            dispatch(logout());
            navigate('/')
            return;
        }
        else if (action === 'Home') {
            navigate('/')
            return;
        }
        else {
            navigate(`/${action}`);
        }
    }
    return (
        <div>
            <Button variant={variant} className={classes.link} onClick={handleClick}>{action}</Button>
        </div>
    )
}
export default CustomButton