import classes from './MealDealItem.module.css';
import MealDealItemForm from './MealDealItemForm';

const MealDealItem = props => {

    const price = `£${props.price.toFixed(2)}`;

    return (
        <li className={classes.mealDealItem}>
            <div>
                <h3>{props.main}, {props.side}, {props.drink}</h3>
                <div className={classes.price}>{price}</div>
                <div className={classes.score}>{props.score}/10</div>
            </div>
            <div>
                <MealDealItemForm id={props.id} />
            </div>
        </li>
    )
}

export default MealDealItem;