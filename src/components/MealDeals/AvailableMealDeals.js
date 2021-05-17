import classes from './AvailableMealDeals.module.css';

const mealDeals = require('./MealDealsData.json');

const AvailableMeals = () => {
    console.log(mealDeals);
    
    const mealDealList = mealDeals.map(meal => {
        return (
            <li className={classes.mealDealItem}>
                {meal.main}
            </li>
        )
    })

    return (
        <section>
            <ul className={classes.meals}>
                {mealDealList}
            </ul>
        </section>
    )
}

export default AvailableMeals;