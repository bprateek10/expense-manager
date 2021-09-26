import { useState } from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [isEditing, setIsEditiing] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(newExpenseData);
    setIsEditiing(false);
  };

  const startEditingHandler = () => {
    setIsEditiing(true);
  }

  const stopEditingHandler = () => {
    setIsEditiing(false);
  }

  return <div className='new-expense'>
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
  </div>
};

export default NewExpense;