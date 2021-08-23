import React,{useState} from 'react';
import ExpenseForm from './NewExpenseForm';
import './NewExpenses.css';

const NewExpense=(props)=>{
    const onSaveExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setButton(false);

    }
    const [pressed,setButton]=useState(false)
    const setValueHandler=()=>{setButton(true)}
    const stopValueHandler=()=>{setButton(false)}
    return (
        <div className="new-expense">
            {!pressed &&<button onClick={setValueHandler}>Add new  Expense</button>}
            {pressed &&<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}  onCancel={stopValueHandler}/>}
            
        </div>)
}

export default NewExpense;