import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomButton from '../../Button/CustomButton';
import classes from './Header.module.css';
import { useSelector } from 'react-redux';


function Header() {
    const connected = useSelector(state => state.authReducer.isAuth);
    const token = localStorage.getItem('token');

    return (
        <Navbar className={classes.header} bg="light" variant="light">
            <Container>
                <Nav className='me-auto'>
                    {connected || token ? <CustomButton action='logout' variant='danger' /> : <CustomButton action='Sign-In' />}
                    <CustomButton action='Home' />
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Header