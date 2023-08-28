import { useState } from 'react'
import ExpenseList from './ExpenseList'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart'

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')
  const filterChangeHandler = (selectYear) => {
    setSelectedYear(selectYear)
  }
  const filteredExpense = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onSelectedYear={selectedYear}
          onExpenseFile={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpenseList item={filteredExpense}/>
      </Card>
    </div>
  )
}

export default Expenses
