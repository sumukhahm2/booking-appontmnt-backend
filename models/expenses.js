const Sequelize=require('sequelize')

const sequelize=require('../util/databas')

const Expense=sequelize.define('expense',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    catogory:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    },
    type:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    }
}
);

module.exports=Expense; 