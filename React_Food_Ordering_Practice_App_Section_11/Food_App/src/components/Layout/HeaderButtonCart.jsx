import React from 'react'
import classes from '../Layout/HeaderButtonCart.module.css'
import CartIcon from './../Cart/CartIcon';

function HeaderButtonCart() {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}

export default HeaderButtonCart
