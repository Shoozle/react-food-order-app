import classes from './MealDealItem.module.css';

const MealDealItem = props => {

    const saving = `£${props.saving.toFixed(2)}`;

    return (
        <li className={classes.mealDealItem}>
            <div>
                <h3>{props.main}, {props.side}, {props.drink}</h3>
                <div className={classes.saving}>{saving}</div>
                <div className={classes.score}>{props.score}/10</div>
            </div>
            <div>
                
            </div>
        </li>
    )
}

export default MealDealItem;