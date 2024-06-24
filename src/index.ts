const express = require('express');
const data = require('../data/data.json')

const app = express();

const port = 5000;

app.get('/search/:querry',(req:any,res:any) => {
    res.send(`that ${req.params.querry}`)
})

app.get('/api/movies',(req:any,res:any) => {
    res.status(200).send(data)
})

app.get('/api/movies/:id',(req:any,res:any) => {
    if (data.find((e:any) => e.id == req.params.id)){
    res
    .status(200)
    .send(data.find((e:any) => e.id == req.params.id))
    .end()
    }else{
    res
    .status(404)
    .send('not found')
    }
})

app.use((req:any,res:any)=>{
    res.status(404).send('Not Found')
})

app.listen(port, () => {
    console.info(`current port ${port}`);
})
.on('error', (err:Error) => {
    console.error(`Error: ${err.message}`);
})
