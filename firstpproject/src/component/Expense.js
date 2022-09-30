
import ExpenseItem from "./ExpenseItem";
const Expense=(props)=>{
    return(
  <div className='expense'>
    {
      props.item.map(
        expense =>(
          <ExpenseItem 

  date={"15 july 2022"}
 tittle={expense.tittle}
 price={expense.price}
 ></ExpenseItem>


        )
      )
    }
 

 </div> 

    );
}
export default Expense;