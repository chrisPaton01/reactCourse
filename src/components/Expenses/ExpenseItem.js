// importing css file
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// importing a specific function from the React Library
import React, { useState } from 'react';

/* Function name should repeat the file name for good practice
Takes in props from custom component element in App.js, in this case its the
objects from the array and their properties
*/
const ExpenseItem = (props) => {
  // Pure JS code goes before return

  /* calling the useState function that was imported from the react library it 
  is known as a React Hook and Hooks start with use, they shouldn't be called 
  within nested functions or outside of reac functions using props.title as an 
  argument creates a special sort of variable useState returns a function for us
  to call laterto assign a new value to that variable
  */
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem Evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  // return contains all JSX code
  return (
    <li>
      <Card className='expense-item'>
        {/* Outputting an Object won't work so it must be converted to a String or 
      Number etc */}
        {/* <div>{props.date.toISOString()}</div> */}

        {/* Takes the date from each prop which has an object and its properties 
      given to it by the component element in Apps.js. Each prop has an object 
      and it's properties. The dates of each object are then passed to the 
      ExpenseDate component
      */}
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>£{props.amount}</div>
        </div>
        {/* simply point to arrow function, don't invoke it inside return */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

// exporting ExpenseItem component so it can be imported elsewhere
export default ExpenseItem;
