import React from 'react'
import classes from '../Layout/Header.module.css';
import mealsImage from '../../assets/meals2.jpg';
import HeaderButtonCart from './HeaderButtonCart';

function Header() {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderButtonCart/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="a meal table" />
            </div>
        </React.Fragment>
    )
}

export default Header
