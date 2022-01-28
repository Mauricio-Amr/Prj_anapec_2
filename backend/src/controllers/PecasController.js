
const PecasService = require('../services/PecasServices');

module.exports = { 
    buscarTodas : async(req, res) =>{
        res.header("Access-Control-Allow-Origin", "*");
        let json = {error:'', result:[]};

        let pecas = await PecasService.buscarTodas();

        for (let i in pecas){
            
            json.result.push({
                codigo: pecas[i].codigo,
                nome: pecas[i].nome,
                fabricante: pecas[i].fabricante,
                modelo: pecas[i].modelo,
                linha: pecas[i].linha
            })
        }
        res.json(json);
    },

    buscarUm: async(req,res) =>{
        res.header("Access-Control-Allow-Origin", "*");
        let json = { error:'', result:{}};

        let codigo = req.params.codigo;
        let pecas = await PecasService.buscarUm(codigo);
        
        if(pecas){
            json.result = pecas

        }

        res.json(json)

    },

    inserir: async(req,res) =>{
        res.header("Access-Control-Allow-Origin", "*");


        let json = { error:'', result:{}};

        let codigo = req.body.codigo;
        let nome = req.body.nome;
        let fabricante = req.body.fabricante;
        let modelo = req.body.modelo;
        let linha = req.body.linha;
            
        if(codigo && nome && fabricante && modelo && linha){
            let PecasCodigo = await PecasService.inserir(codigo, nome, fabricante, modelo, linha);
            json.result = {
                
                codigo,
                nome,
                fabricante,
                modelo,
                linha
            };
        }else{
            json.error = `Campo  não  enviado ${codigo}`
        }

        res.json(json);
        
    },

    alterar: async(req,res) =>{
        res.header("Access-Control-Allow-Origin", "*");

        let json = { error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let fabricante = req.body.fabricante;
        let modelo = req.body.modelo;
        let linha = req.body.linha;
            
        if(codigo && nome && fabricante && modelo && linha){
            await PecasService.alterar(codigo, nome, fabricante, modelo, linha);
            json.result = {
                codigo,
                nome,
                fabricante,
                modelo,
                linha
            };
        }else{
            json.error = 'Campo  não  enviado '
        }

        res.json(json);
        
    },

    excluir : async(req,res) => {
        res.header("Access-Control-Allow-Origin", "*");


        let json = {erro:'', result:{}};

        let codigo = req.params.codigo
        await PecasService.excluir(codigo)

        res.json(json)
    },

    verificar : async(req,res) => {
        res.header("Access-Control-Allow-Origin", "*");

        let json = {error: '', result:{}};
        let codigo = req.params.codigo
       

        let pecas = await PecasService.verificar(codigo);
        
        if(pecas){
            json.result = pecas

        }

        res.json(json)
    },

    inserirCompativel : async(req, res) => {

        res.header("Access-Control-Allow-Origin", "*");

        //codigo_ori, codigo_comp , nome, fabricante, modelo, observacao
        let json = {error :'', result: {}};

        let codigo  = req.body.codigo;
        let nome  = req.body.nome;
        let fabricante = req.body.fabricante;
        let modelo = req.body.modelo;
        let observacao = req.body.observacao;

        if(codigo && nome && fabricante && modelo && observacao){
            let PecasCodigoComp = await PecasService.inserirCompativel(codigo, nome, fabricante, modelo, observacao);
            json.result = {
                
                codigo,
                nome,
                fabricante,
                modelo,
                observacao
            };
        }else{
            json.error = `Campo  não  enviado ${codigo}`
        }

        res.json(json);
        

    },

    inserirCompatibilidade: async(req, res) =>{

        res.header("Access-Control-Allow-Origin", "*");

        let json = {erro:'', result: {}}


        //   codigo_ori, codigo_comp
        
        let cod_pc_ori = req.body.cod_pc_ori;
        let cod_pc_comp  = req.body.cod_pc_comp;
        

        if(cod_pc_ori && cod_pc_comp){
            let PecasCodigoCompatibilidade = await PecasService.inserirCompatibilidade(cod_pc_ori,cod_pc_comp);
            json.result = {
                
                cod_pc_ori,
                cod_pc_comp,
                
            };
        }else{
            json.error = `Campo  não  enviado ${codigo}`
        }

        res.json(json);

    },

    verificarPecasComp : async(req,res) => {
        res.header("Access-Control-Allow-Origin", "*");

        let json = {error: '', result:{}};
        let codigo = req.params.codigo
       

        let pecas = await PecasService.verificarPecasComp(codigo);
        
        if(pecas){
            json.result = pecas

        }

        res.json(json)
    },

}