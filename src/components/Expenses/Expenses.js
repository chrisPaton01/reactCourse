import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
// ../ goes back one folder when searching through directories for imports
import Card from '../UI/Card';
import React, { useState } from 'react';

// Apps.js contains import Expenses from './components/Expenses'; and
// <Expenses expenses={expenses} /> to give arrays objects as props to
// Expenses.js

const Expenses = (props) => {
  const [filterYearState, setfilterYear] = useState('2019');

  const showYearHandler = (selectedYear) => {
    setfilterYear(selectedYear);
    console.log(selectedYear + ' selectded');
  };

  // array function returns a new array
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYearState;
  });

  // let noExpensesContentMessage = <p>No expenses found.</p>;

  /* .map() creates a new array based on another array and lets you 
    transform every element in the original array. This code makes it so
    that the items shown in the UI is based on the items present in the 
    mapped array 
    */
  /*
  if (filteredExpenses.length > 0) {
    noExpensesContentMessage = filteredExpenses.map((expenses) => (
      // key is used as an unique id to help react identify each data set
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ));
  }
  */
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYearState}
          onFilterYearSelect={showYearHandler}
        />
        {/* noExpensesContentMessage */}

        <ExpensesList expenses={filteredExpenses}/>

        {/*<ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
