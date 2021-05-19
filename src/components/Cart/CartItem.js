import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `£${props.price.toFixed(2)}`

    return (
        <li className={classes['cart-item']}>
            <div>
                <h3>{props.main}, {props.snack}, {props.drink}</h3>
                <span>{price}</span>
                <span>x{props.amount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem