const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const catelogories = require('./catelogories.json');
const newsDetails = require('./newsDetails.json')
app.get('/', (req, res) => {
    res.send('Welcome to my World totoootooo')
})
app.use(cors())
app.get('/catelogories', (req, res) =>{
    res.send(catelogories)
})

app.get('/catelogories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    if(id===0){
        res.send(newsDetails)
    }else{
        const categoryNews = newsDetails.filter(n=> parseInt(n.category_id )===id);
        res.send(categoryNews)
    }
})
app.get('/newsDetails', (req, res) =>{
    res.send(newsDetails)
})
app.get('/newsDetails/:id', (req, res) =>{
    const id = req.params.id;
    const selectedNews = newsDetails.find(news => news._id === id)
    res.send(selectedNews)
})

app.listen(port,()=>{
    console.log(`news dragon server listening on port ${port}`)
})