import React from 'react';
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import MealDeals from './components/MealDeals/MealDeals';

function App() {
  return (
    <>
      <Cart/>
      <Header />
      <main>
        <MealDeals />
      </main>
    </>
  );
}

export default App;
