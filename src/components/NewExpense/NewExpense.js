import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    // using the Spread operator to create a new object with the data from the
    // object that was passed up to this function parameter from the Child
    // ExpenseForm component
    const saveExpenseData = {
      ...expenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(saveExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
