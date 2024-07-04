const path = require('path');


const express=require('express')

const expenseControler=require('../controlers/expense')

const route=express.Router()


route.post('/expense/add-expense',expenseControler.addExpense)

route.get('/expense/fetch-expense',expenseControler.fetchExpense)

route.delete('/expense/delete-expense/:id',expenseControler.deleteExpense)

route.put('/expense/edit-expense/:id',expenseControler.editExpense)

module.exports=route 