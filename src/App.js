import React from 'react';
import Header from "./components/Layout/Header";
import MealDeals from './components/MealDeals/MealDeals';

function App() {
  return (
    <>
      <Header />
      <main>
        <MealDeals />
      </main>
    </>
  );
}

export default App;
