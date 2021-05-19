import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const [btnbump, setbtnbump] = useState(false)
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    //Transform array of data into single value sing a function and an initial value
    //Func takes two args, curNumber will be different each time func is called on array value
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);



    const btnClasses = `${classes.button} ${btnbump ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setbtnbump(true)

        const timer = setTimeout(() => {
            setbtnbump(false)
        }, 300);

        //Cleanup func called automatically
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
    <button onClick={props.onClick} className={btnClasses}>
        <span className={classes.icon}> <CartIcon /> </span>
        <span >Your Cart </span>
        <span className={classes.total}> {numberOfCartItems} </span>
    </button>
    )
}

export default HeaderCartButton