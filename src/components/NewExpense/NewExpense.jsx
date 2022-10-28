
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing((currentForm) => {
            return isEditing !== currentForm
        })

    }

    const startEditingHandler = () => {
        let isEditing = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        setIsEditing((prevForm) => {
            return isEditing !== prevForm
        })

    
    }

    const stopEditingHandler = () => {
        setIsEditing((currentForm) => {
            return isEditing !== currentForm
        })
    }
   
    return (
        <div className="new-expense">
            {isEditing ? <ExpenseForm 
                        onSaveExpenseData={saveExpenseDataHandler} 
                        onCancel={stopEditingHandler}/>
            :
            <button onClick={startEditingHandler}>Add new expense</button>
            }
          
        </div>
    )
   
    }

   
export default NewExpense;