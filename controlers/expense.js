const Expense=require('../models/expenses')


exports.addExpense= async (req,res,next)=>{
   console.log(req.body)
  try{
    const result=await Expense.create(req.body)

    res.status(201).json({newExpenses:result})
   }
   catch(err){
    res.status(500).json({error:err})
    }
  
}

exports.fetchExpense= async (req,res,next)=>{

    await Expense.findAll()
    .then(result=>{
        console.log(result)
        res.status(201).json({newExpenses:result})
})
    .catch(err=>{
        console.log(err)
    })
}

exports.deleteExpense= async (req,res,next)=>{
    try{
        if(req.params.id== 'undefined')
        {
            console.log("id is missing")
            res.status(400).json({err:'id is missing'})
        }
    const uid=req.params.id
    console.log(uid)
  await Expense.destroy({where:{id:uid}})
  

  res.sendStatus(200)
    }
    catch(err){
        console.log(err)
    }
   
}


exports.editExpense= async(req,res,next)=>{
  const eid=req.params.id
    try{
        const result=await Expense.update({
            type:req.body.type,
            amount:req.body.amount,
            description:req.body.description,
            email:req.body.email
        },
        {where:id=eid}
        )
        res.status(201).json({updatedExpense:result})
       }
       catch(err){
        res.status(500).json({error:err})
        }
}