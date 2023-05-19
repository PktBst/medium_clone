const express=require('express')
const router=express.Router()

router.use('/',(req,res)=>{
    res.send("router GET req to / ")
})

module.exports=router