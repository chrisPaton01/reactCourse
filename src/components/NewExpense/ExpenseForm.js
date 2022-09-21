import './ExpenseForm.css';

const ExpenseForm = () => {
  
  // default event object, which will create an event object when change happens
  const titleChangeHandler = (event) => {
    // print event object and all its info
    // console.log(event);
    // print each character inout that is typed by the user
    // console.log(event.nativeEvent.data);
    // shows the complete entry input by user and retroactively updates
    console.log(event.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__controls'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className='new-expense__controls'>
          <label>Date</label>
          <input type='date' min='01-01-2021' max='31-12-2022' />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
