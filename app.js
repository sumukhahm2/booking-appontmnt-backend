const path = require('path');
const sequelize= require('./util/databas')
const express = require('express');
const bodyParser = require('body-parser')
const cors=require('cors');
//const errorController = require('./controllers/error');
//const User=require('./models/user')
const app = express();
app.use(cors())

const expenseRoutes=require('./routes/expense')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()) 
app.use(express.static(path.join(__dirname, 'public')));

app.use(expenseRoutes)


//app.use(errorController.get404);

sequelize.sync({force:true}) 
.then(()=>{
    
})
.catch(error=>{
    console.log(error)
})
app.listen(5000)
    