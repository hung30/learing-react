import './NewExpense.css'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onNewExpenseData(expenseData)
  }

  const [isAddNew, setIsAddNew] = useState(false)

  function addNewExpenseHandler() {
    setIsAddNew(true)
  }

  const noAddNewExpenseHandler = () => {
    setIsAddNew(false)
  }
  return (
    <div className='new-expense'>
      {isAddNew ?
        <ExpenseForm onAddExpenseFromForm={saveExpenseDataHandle} onCancel={noAddNewExpenseHandler}/> :
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense