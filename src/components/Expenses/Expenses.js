import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpensesChart'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [year, setYear] = useState('2020')
  const filterChangeHandler = (year) => {
    setYear(year)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />  
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
    </Card>
    </li>
  );
}

export default Expenses;
