const express=require('express')
const app=express()
const appPath=require('./routes/app')

app.use('/',appPath)

app.listen(3000,()=>{
    "listening on port 3000"
})

