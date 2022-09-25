// importing ExpenseItem component from the components folder
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

// Array of expense item objects with various keys and values (obj properties)
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    // Date method is an in-built date constructor built into JS
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// This arrow function is a JS coded function itself, everything within is JSX
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (saveExpenseData) => {
    setExpenses((prevExpenses) => {
      return [saveExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      {/*<h2>Let's get started!</h2>*/}
      {/* Using the imported ExpenseItem component as an element. This custom
      element will display any content contained with the ExpenseItem component
      The custom element was then given props from the values stored in the 
      objects of the array. The values can then be used by the ExpenseItem.js
      file by including (props) in the ExpenseItem function
      */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

// Makes it so this component can be imported into other files, mainly index.js
export default App;
