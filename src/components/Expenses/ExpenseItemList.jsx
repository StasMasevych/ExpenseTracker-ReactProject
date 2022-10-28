import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart';

import './ExpenseItemList.css';
import ExpensesFilter from "./ExpensesFilter";

const ExpenseItemList = (props) => {
    const [enteredFilter, setEnteredFilter] = useState('2020')

    const addFilterDataHandler = (addedFilterData) => {
        setEnteredFilter(addedFilterData)
        console.log('In App.js')
        
    }
    console.log(enteredFilter)

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear().toString() === enteredFilter
    })


    console.log(filteredExpenses)


    let expensesListContent = <h3 style={{'color': 'white', 'textAlign': 'center'}}>{'No expenses found'}</h3>

    if (filteredExpenses.length > 0) {
        expensesListContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}
            />
        ))
    }

    return (
        <div>
        <Card className="expenses">  
            <ExpensesFilter 
            selected={enteredFilter} 
            onAddFilterData = {addFilterDataHandler} 
            />
            <ExpensesChart expenses={filteredExpenses}/>
            <ul className="expenses-list">
            {expensesListContent}
            </ul>
            
        </Card>
        </div>
        
    )
}

export default ExpenseItemList;