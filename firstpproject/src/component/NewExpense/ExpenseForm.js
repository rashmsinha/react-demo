import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{

const[enteredTittle,setEnteredTittle]=useState('');
const[enteredPrice,setEnterdPrice]=useState('');
const[enteredDate,setEnteredDate]=useState('');


    const tittleChangeHandler=(event)=>{
        setEnteredTittle(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setEnterdPrice(event.target.value)
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value )
    };
    const submitHandler=(event)=>{
        event.preventDefault();


        const expenseData={
            tittle:enteredTittle,
            price:enteredPrice,
            date: new Date(enteredDate)

        }
props.onSaveExpenseData(expenseData);

        console.log(expenseData);

        setEnteredTittle('');
        setEnterdPrice('');
        setEnteredDate('');



    };

    

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control" >
                <label>Tittle</label>
                <input type="text"value={enteredTittle} onChange={tittleChangeHandler}/>
                 </div>
 
                 <div className="new-expense__control">
                <label>price</label>
                <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
                 </div>

                 <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                 </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>

            </div>
        </form>
        
    );
    }

    
export default ExpenseForm;