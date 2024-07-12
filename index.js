const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello Word')
})

app.get('/oi', (req,res)=>{
    res.send('Olá, Mundo!')
})

app.get('/welcome', (req,res)=>{
    res.send('Boas vindas ao curso!')
})


app.listen(3000)