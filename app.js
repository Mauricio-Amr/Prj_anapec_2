require('dotenv'). config({path: 'variaveis.env'});
const express = require('express');
const cors = require('cors');
const  bodyParser = require('body-parser');
const path = require('path');
const app = express();

const routes = require('./backend/src/routes')
const PORT = process.env.PORT


app.use(cors({
    origin: '*'
}));
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