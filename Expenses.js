import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';
import ExpensesList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const[filterYear,setFilteredYear]=useState('2019');


const filterChangeHandler=(selectedYear)=>{
  setFilteredYear(selectedYear);
}

const filteredExpenses=props.items.filter(expense =>{
  return expense.date.getFullYear().toString()===filterYear});

  return (
    <li>
<Card className="expenses">
<ExpensesFilter selected={filterYear} filterChange={filterChangeHandler}/>
<ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </li>
    
  );
}

export default Expenses;
       