import classes from './AvailableMealDeals.module.css';
import Card from '../UI/Card';
import MealDealItem from './MealDealItem/MealDealItem';

const mealDeals = require('./MealDealsData.json');

const AvailableMeals = () => {
    console.log(mealDeals);

    const mealDealList = mealDeals.map(mealDeal => {
        return (
            <MealDealItem
                key={mealDeal.id}
                {...mealDeal}
            >
            </MealDealItem>
        )
    })

    return (
        <section className={classes.meals}>
            <Card>
                <ul >
                    {mealDealList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;