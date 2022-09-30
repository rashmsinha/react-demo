
import './ExpenseItem.css';
const ExpenseItem=(props)=>{

   
return (
    <div className="expense-item">
        <div>
        {props.date}
        </div>
        <div className="expense-description">
            <h1>{props. tittle   }</h1>
        
        <div className="expense-price">${props.price}</div>
    </div>
    </div>
    
);
}

export default ExpenseItem;