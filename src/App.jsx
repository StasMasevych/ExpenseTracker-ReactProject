
import { useState } from 'react';
import ExpenseItemList from './components/Expenses/ExpenseItemList'
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {title: 'UDEMY course', price: 11.15, date: new Date(2022, 8, 18), id: 'e1'},
  {title: 'Lunch', price: 15.00, date: new Date(2021, 7, 18), id: 'e2'},
  {title: 'Shop Products', price: 20.00, date: new Date(2020, 6, 18), id: 'e3'},
  {title: 'Donation', price: 15.30, date: new Date(2022, 5, 18), id: 'e4'}
]


function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = expense => {
   /*  console.log('In App.js')
    console.log(expense) */
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]
    })
  }

  console.log(INITIAL_EXPENSES)
  console.log(expenses)


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItemList data={expenses}/>
    </div>
  );
}

export default App;
