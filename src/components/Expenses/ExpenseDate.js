import './ExpenseDate.css';

function ExpenseDate(props) {
  
  // Converts date from object keys into another specified format
  const formattedDay = props.date.toLocaleString('en-US', { day: '2-digit' });
  const formattedMonth = props.date.toLocaleString('en-US', { month: 'long' });
  // getFullYear() another built-in method extracts the year as a four digit num
  const formattedYear = props.date.getFullYear('en-US', { year: 'long' });

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{formattedDay}</div>
      <div className='expense-date__month'>{formattedMonth}</div>
      <div className='expense-date__day'>{formattedYear}</div>
    </div>
  );
}

export default ExpenseDate;
