import React from 'react';

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <>
        <header className={classes.Header}>
            <h1>Daily Meal Deal Mail</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Meal Deal Sandwiches Banner" />
        </div>
        </>
    )
}

export default Header;