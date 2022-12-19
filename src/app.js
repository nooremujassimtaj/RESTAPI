const express = require('express');
const app = express();
const mongoose = require('mongoose')
require("../src/db/conn")
const mensRanking = require("../src/models/mens")
const port = process.env.PORT || 80;
app.use(express.json())
app.get('/mens',async(req,res)=>{
    try{
        res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e)
    }
})
app.post('/mens',async(req,res)=>{
    try{
       const addingMenRecord =  new mensRanking(req.body)
       console.log(req.body)
        const insertMens = await addingMenRecord.save()
        res.status(201).send(insertMens)
    }catch(e){
        res.status(400).send(e);
    }
})
app.listen(port,()=>{
    console.log(`Iam running on ${port} !`)
})