import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';




const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    //Transform array of data into single value sing a function and an initial value
    //Func takes two args, curNumber will be different each time func is called on array value
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return (
    <button onClick={props.onClick} className={classes.button}>
        <span className={classes.icon}> <CartIcon /> </span>
        <span >Your Cart </span>
        <span className={classes.total}> {numberOfCartItems} </span>
    </button>
    )
}

export default HeaderCartButton