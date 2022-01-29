configCors =  {
	headers: {'Origin': '*',
	  'Access-Control-Allow-Origin': '*',
	}};

const url = "https://anapec.herokuapp.com/api/pecas";

const config = {};

const form = new FormData();


function enviar() {

    const valor = document.getElementById('fm-pesq-imp').value
    if (document.getElementById('tab-res-pes')) {
        document.getElementById('tab-res-pes').remove();
        getPecas(valor);
    }
    else {
        getPecas(valor)
    }
}

async function getPecas(codigo) {

    //Criando a tabela de resultado  da pesquuisa
    let tabela = document.createElement('table')
    tabela.setAttribute('id', 'tab-res-pes');
    tabela.setAttribute('class', 'table')

    let thead = document.createElement('thead');
    thead.setAttribute('class','thead-dark')

    let tbody = document.createElement('tbody');

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    //adicionando a tabela a div
    document.getElementById('lspeca').appendChild(tabela);


    //Criando e adicionando o  cabeçalho da tabela
    let linha_1 = document.createElement('tr');
    let coluna_1 = document.createElement('th');
    coluna_1.innerHTML = "CODIGO COMPATIVEL";
    let coluna_2 = document.createElement('th');
    coluna_2.innerHTML = "NOME";
    let coluna_3 = document.createElement('th')
    coluna_3.innerHTML = "MODELO"


    linha_1.appendChild(coluna_1);
    linha_1.appendChild(coluna_2);
    linha_1.appendChild(coluna_3)
    thead.appendChild(linha_1);



    const url = `https://anapec.herokuapp.com/api/pecas/${codigo}`

    return await axios.get(url, configCors)
        .then(response => {
            let data = response.data.result
            console.log(data)
            //console.log(data[0].codigo)


            for (var i = 0; i < data.length; i++) {
                //adiciona o resultado ao  corpo da tabela
                let codigo_comp = data[i].codigo
                let nome = data[i].nome
                let modelo = data[i].modelo

                let linha_2 = document.createElement('tr');
                let linha_2_data_1 = document.createElement('td');
                linha_2_data_1.innerHTML = codigo_comp;
                let linha_2_data_2 = document.createElement('td');
                linha_2_data_2.innerHTML = nome;
                let linha_2_data_3 = document.createElement('td')
                linha_2_data_3.innerHTML = modelo

                linha_2.appendChild(linha_2_data_1);
                linha_2.appendChild(linha_2_data_2);
                linha_2.appendChild(linha_2_data_3)
                tbody.appendChild(linha_2);
            }
        }

        )

        .catch(error => console.log(error));

}





async function addPecas_ori() {

    codigo_pc_ori = document.getElementById('fm-inp-codigo').value
    nome_pc_ori = document.getElementById('fm-inp-nome').value
    fabricante_pc_ori = document.getElementById('fm-inp-fabricante').value
    modelo_pc_ori = document.getElementById('fm-inp-modelo').value
    linha_pc_ori = document.getElementById('fm-inp-linha').value

    console.log(codigo_pc_ori)

    const itens = new URLSearchParams()
    itens.append('codigo', `${codigo_pc_ori}`)
    itens.append('nome', `${nome_pc_ori}`)
    itens.append('fabricante', `${fabricante_pc_ori}`)
    itens.append('modelo', `${modelo_pc_ori}`)
    itens.append('linha', `${linha_pc_ori}`)

    console.log(itens)
    const url = `https://anapec.herokuapp.com/api/pecas`


    const verificado = await verifCad(`${codigo_pc_ori}`)
        console.log(verificado.codigo)


    if (codigo_pc_ori == verificado.codigo) {
        alert(`${codigo_pc_ori} : codgo ja cadastrado`)
    }
    else {
        await axios({
            method: "post",
            url: `${url}`,
            data: itens,
           headers: { 'Content-Type': 'application/x-www-form-urlencoded',
           'Access-Control-Allow-Origin': '*' }
            }   )
            .then(response => {
                alert(response.status)
            })
            .catch(error => alert(error))
    }
}


 async function verifCad(codigoDaPeca) {
    const url = `https://anapec.herokuapp.com/api/pecas/verificar/${codigoDaPeca}`

     return await axios.get(url, configCors)
        .then(response => {

            let data = response.data.result
            return data

        }
        )

        .catch(error => console.log(error));
        
}



async function addPecas_comp() {
/*verificar se peça ja esta cadastrada se não estiver cadastrar */

codigo_pc_comp = document.getElementById('fm-inp-codigo-comp').value
resultadoVericadoComp = await verifCadCompativel(codigo_pc_comp)
resultado = (codigo_pc_comp == resultadoVericadoComp.codigo )

if(!resultado){

    inserirCompativel()

    console.log('cadastrando compativel')

    resultadoVericadoComp2 = await verifCadCompativel(codigo_pc_comp)
    novoresultado = codigo_pc_comp == resultadoVericadoComp2.codigo 
    console.log('novo resultado :',novoresultado)
    if(novoresultado){
        console.log(`cadastrando compatibilidade ${novoresultado} `)
        inserirCompatibilidade()

    }
}else{
    inserirCompatibilidade()
}

/*verificar se peça ja esta cadastrada se sim cadastrar compatibilidade */



}


async function inserirCompativel() {
    
    codigo_pc_ori = document.getElementById('fm-inp-codigo-ori').value
    codigo_pc_comp = document.getElementById('fm-inp-codigo-comp').value
    nome_pc_comp = document.getElementById('fm-inp-nome-comp').value
    fabricante_pc_comp = document.getElementById('fm-inp-fabricante-comp').value
    modelo_pc_comp = document.getElementById('fm-inp-modelo-comp').value
    observacao_pc_comp = document.getElementById('fm-inp-obsevacao-comp').value

    const url = `https://anapec.herokuapp.com/api/pecas/compativel`

        const itensComp= new URLSearchParams()
        itensComp.append('codigo', `${codigo_pc_comp}`)
        itensComp.append('nome', `${nome_pc_comp}`)
        itensComp.append('fabricante', `${fabricante_pc_comp}`)
        itensComp.append('modelo', `${modelo_pc_comp}`)
        itensComp.append('observacao', `${observacao_pc_comp}`)
    
        await axios({
            method: "post",
            url: `${url}`,
            data: itensComp,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*', }
        })
            .then(response => {
                alert(response.status)
            })
            .catch(error => alert(error))

            



}

async function inserirCompatibilidade() {
    codigo_pc_ori = document.getElementById('fm-inp-codigo-ori').value
    codigo_pc_comp = document.getElementById('fm-inp-codigo-comp').value

        console.log('cadastrando compatibilidade')
        
        //enviar dados de compatibilidade

        const url_compatibilidade = `https://anapec.herokuapp.com/api/pecas/compatibilidade`

        const itens_compatibilidade = new URLSearchParams()
        itens_compatibilidade.append('cod_pc_comp', `${codigo_pc_comp}`)
        itens_compatibilidade.append('cod_pc_ori', `${codigo_pc_ori}`)

         //cadastra compatibilidade

        await axios({
            method: "post",
            url: `${url_compatibilidade}`,
            data: itens_compatibilidade,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*', }
        })
            .then(response => {
                alert(response.status)
            })
            .catch(error => alert(error))
        


    
}

async function verifCadCompativel(codigoDaPeca) {
    const url = `https://anapec.herokuapp.com/api/pecas/verificarcompativel/${codigoDaPeca}`

     return await axios.get(url, {configCors})
        .then(response => {

            let data = response.data.result
            return data

        }
        )

        .catch(error => console.log(error));
        
}






function attPecas_ori() {

}

function attPecas_comp() {

}



