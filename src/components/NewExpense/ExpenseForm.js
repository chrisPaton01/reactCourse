import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // default event object, which will create an event object when change happens
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    /* whenever you listen to the change eventfor an input, if you read the 
    value of that input element, it'll always be a string. Even if it stores a 
    number it will be a number as a string and the same for the date.
    */
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    // Stops form from sending submission request to stop webapge reloading when
    // the Add Expense button is clicked to submit the form
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // using default date constructor to format enteredDate which is a string
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    // clearing the input values to empty strings once the form's been submitted
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          {/*Feeding the state back into the input field*/}
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input
            type='date'
            min='01-01-2021'
            max='31-12-2022'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
