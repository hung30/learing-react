import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className='expenses-list__fallback'>There are no expenses this year</h2>
  }
  return (
    <ul className='expenses-list'>
      {props.item.map((expense) => (
      // eslint-disable-next-line react/jsx-key
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpenseList