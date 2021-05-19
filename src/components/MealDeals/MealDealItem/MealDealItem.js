import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealDealItem.module.css';
import MealDealItemForm from './MealDealItemForm';

const MealDealItem = props => {

    const cartCtx = useContext(CartContext)
    const price = `£${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li className={classes.mealDealItem}>
            <div>
                <h3>{props.main}, {props.side}, {props.drink}</h3>
                <div className={classes.price}>{price}</div>
                <div className={classes.score}>{props.score}/10</div>
            </div>
            <div>
                <MealDealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealDealItem;