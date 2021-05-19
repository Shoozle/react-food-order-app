import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import MealDeals from './components/MealDeals/MealDeals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <MealDeals />
      </main>
    </>
  );
}

export default App;
