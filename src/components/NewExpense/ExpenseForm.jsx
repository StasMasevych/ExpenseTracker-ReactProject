import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle ] = useState('');
    const [enteredPrice,setEnteredPrice ] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    //option to use one useState - by object
   /*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''

    }) */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value) 
       /*  setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        }) */
       
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate) //take our data and convert to date object
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');

    }


    return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Price</label>
                        <input type="number" value={enteredPrice} min="0.01" step="0.01" onChange={priceChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2022-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}type="button">Cancel</button>
                    <button type="submit">Add Espense</button>
                </div>
            </form>
    
    )
}

export default ExpenseForm;