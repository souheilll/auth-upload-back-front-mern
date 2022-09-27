import React from 'react';
import CustomButton from '../../Button/CustomButton';
import classes from './Footer.module.css';

function Footer() {
    return (
        <div className={classes.footer}>
            <CustomButton action='contact-us' />
        </div>
    )
}

export default Footer