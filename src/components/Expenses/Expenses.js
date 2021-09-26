import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(item => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  return(
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} filteredYear={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p> 
      ) : (
        filteredExpenses.map(item => (
          <ExpenseItem
            key={item.id} 
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}  */}
    </Card>
  )
}

export default Expenses;