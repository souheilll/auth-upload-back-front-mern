import React, { useState } from 'react'
import FormInfo from '../../Components/Form/FormInfo'
import classes from './Auth.module.css';

function Auth() {
    const [commandType, setCommandType] = useState('signIn');

    const handleClick = () => {

        if (commandType === 'signIn') {
            setCommandType('register');
        }
        else {
            setCommandType('signIn');
        }
    }

    return (
        <div className={classes.form}>
            <FormInfo commandType={commandType} />
            <p className={classes.text} onClick={handleClick} >
                {commandType === 'signIn' ? 'do not' : ''} have an account ?
                {commandType === 'signIn' ? <b style={{ color: 'red' }}> please register </b> : 'signIn'} </p>
        </div>
    )
}
export default Auth