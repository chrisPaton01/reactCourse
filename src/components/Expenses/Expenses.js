import './Expenses.css';
import ExpenseItem from './ExpenseItem';
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
    console.log('Expenses.JS working');
    console.log(selectedYear + ' selectded');
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filterYearState}
          onFilterYearSelect={showYearHandler}
        />
        <ExpenseItem
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
        />
      </Card>
    </div>
  );
};

export default Expenses;
