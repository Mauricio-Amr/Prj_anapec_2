require('dotenv'). config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const  bodyParser = require('body-parser');
const path = require('path');
const app = express();

const routes = require('./backend/src/routes')
const PORT = process.env.PORT


app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Origin','https://anapec2.herokuapp.com')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors(origin));
    next();
});
    
    
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', routes)
app.use(express.static(__dirname +'/public'))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/pesquisa', (req,res)=>{
    res.render('pages/form_pesquisa')
})

app.get('/cadastro_ori',(req,res)=>{
    res.render('pages/form_cadastro')
})

app.get('/cadastro_comp',(req, res)=>{
    res.render('pages/form_cadastro_comp')
})

app.listen(PORT , () => {
    console.log ('Servidor em execução na porta : '+PORT)
})