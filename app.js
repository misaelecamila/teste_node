const express = require('express');
const app = express();
//require('dotenv').config()
//const port = process.env.PORT ||3000
const port = 3000

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

//conexao banco de dados
const mongoose = require('mongoose');
const user = "rockmiih";
const  password = "SpUKHWNuICTgYBSt";
const dbname = "artistas";
const uri = `mongodb+srv://${user}:${password}@cluster0.qrwoi.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>console.log('conectado ao banco de dados')).catch(e=>console.log(e))


app.use('/',require('./router/indexRouter'));
app.use('/artista',require('./router/artistaRouter'))
app.use((req,res,next)=>{
    res.status(404).render('erro');
});

app.listen(port,()=>console.log("servidor rodando na porta",port));