   
  import React,{useState} from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expense from './component/Expense';
let DUMMY_EXPENSE=[
  {
    date:"15 july 2022",
    tittle: 'food',
    price:2300,
  },
  {
    date:"16july 2022",
    tittle: 'schoolparty',
    price:3200,
  },
  {
    date: "17july 2022",
    tittle: 'travelling',
    price:5500,
  },
  {
    date:"18 july 2022",
    tittle: 'booking',
    price:8300,
  }

];
    
    const App  =() => {
      const[expenses,setExpenses]=useState(DUMMY_EXPENSE);
    
const addExpenseHandler=(expense)=>{
 const updatedExpense=[expense,...expenses];
  setExpenses(updatedExpense);


};

    return (
      
<div>
   <NewExpense onAddExpense ={addExpenseHandler} />
<Expense  item={expenses} />


</div>
    );
    }

export default App;