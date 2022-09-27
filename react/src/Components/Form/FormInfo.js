import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login, signup } from '../../Redux/auth/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function FormInfo({ commandType }) {
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
    const handleConfirmedChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (userInfo.password !== confirmPassword) {
            return alert('please check your password');
        }
        if (commandType === 'signIn') {
            dispatch(login(userInfo, navigate));
            return;
        }
        if (commandType === 'register') {
            dispatch(signup(userInfo, navigate));
        }
    }
    return (
        <Form onSubmit={handleOnSubmit}>
            {commandType === 'register' &&
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label> UserName </Form.Label>
                    <Form.Control type="text" placeholder="Enter userName"
                        name='userName' onChange={handleChange} value={userInfo.userName || ''} />
                </Form.Group>
            }
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    name='email' value={userInfo.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={userInfo.password} placeholder="Password" name='password' onChange={handleChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" value={confirmPassword} placeholder=" confirm Password"
                    name='confirmPassword' onChange={handleConfirmedChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default FormInfo