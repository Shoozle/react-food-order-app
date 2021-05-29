
import classes from './AvailableMealDeals.module.css';
import Card from '../UI/Card';
import MealDealItem from './MealDealItem/MealDealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    //With no dependencies, it runs when loaded first time, never again
    useEffect(() => {
        const fetchMeals = async () => {
            //Await keyword used when expecting a response 
            const response = await fetch('https://meal-deals-6b677-default-rtdb.europe-west1.firebasedatabase.app/meal%20deals.json');

            if (!response.ok) { 
                throw new Error('Something went wrong')
            }

            const responseData = await response.json()
            //Keys will be M1, M2, based on the data in the firebase db
            //As it's an OBJECT, we need to push them into an array
            const loadedMeals = [];

            //Loops over every m1 m2 in DB as they are the headers
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    main: responseData[key].main,
                    side: responseData[key].side,
                    drink: responseData[key].drink,
                    score: responseData[key].score,
                    price: responseData[key].price 
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }
            //Fetchmeals is an async fetch function so we can catch it here
            fetchMeals().catch(error => {
                setIsLoading(false)
                setHttpError(error.message)
            }) 
    }, [])

    if (isLoading) { 
        return (<section className={classes.MealsLoading}><p>Loading...</p></section>)
    }

    if (httpError) {
        return (<section className={classes.MealsError}><p>{httpError}</p></section>)
    }

    const mealDealList = meals.map(mealDeal => {
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