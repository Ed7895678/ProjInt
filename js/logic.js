// Função para calcular o IMI
function calcularIMI() {
    // Input
    let valorPatrimonial = parseFloat(document.getElementById("valorPatrimonial").value);
    let taxaIMI = parseFloat(document.getElementById("taxaIMI").value)
    // Validação 
    if(isNaN(valorPatrimonial) || isNaN(taxaIMI)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let output = ((taxaIMI / 100) * valorPatrimonial).toFixed(2)
        document.getElementById("output").innerHTML = output + "€";
    }
}



// Função para calcular o IMT
// Função para calcular o IMT
function calcularIMT() {
    const precoImovel = parseFloat(document.getElementById('precoImovel').value);
    const finalidadeImovel = document.getElementById('finalidadeImovel').value;
    const localImovel = document.getElementById('localImovel').value;
    let imt = 0;

    // Validação
    if (isNaN(precoImovel)) {
        document.getElementById("error").innerHTML = "Preencha todos os campos de input.";
        document.getElementById("output").innerHTML = "";
        return;
    } else {
        document.getElementById("error").innerHTML = "";
    }

    if(localImovel == 'portugal') {
        if (precoImovel <= 101917) {
            imt = 0;
        } else if (precoImovel <= 139412) {
            imt = precoImovel * 0.02 - 2038.34;
        } else if (precoImovel <= 190086) {
            imt = precoImovel * 0.05 - 6220.70;
        } else if (precoImovel <= 316772) {
            imt = precoImovel * 0.07 - 10022.42;
        } else if (precoImovel <= 633453) {
            imt = precoImovel * 0.08 - 13190.14;
        } else if (precoImovel <= 1102920) {
            imt = precoImovel * 0.06;
        } else {
            imt = precoImovel * 0.075;
        }
    }else if (localImovel == 'regioes'){
        if (precoImovel <= 127396.25) {
            imt = 0;
        } else if (precoImovel <= 174265.00) {
            imt = precoImovel * 0.02 - 2547.93;
        } else if (precoImovel <= 237607.50) {
            imt = precoImovel * 0.05 - 7775.88;
        } else if (precoImovel <= 395965.00) {
            imt = precoImovel * 0.07 - 12528.03;
        } else if (precoImovel <= 791816.25) {
            imt = precoImovel * 0.08 - 16487.67;
        } else if (precoImovel <= 1378650.00) {
            imt = precoImovel * 0.06;
        } else {
            imt = precoImovel * 0.075;
        }
    }

    if (finalidadeImovel == 'secundaria') {
        imt += 1000;
    }

    const impostoSelo = precoImovel * 0.008;
    const total = imt + impostoSelo;

    document.getElementById('output').innerHTML = total.toFixed(2) + "€"
}


// Função para calcular Prestação ao Credito Habitação
function calcularPrestacao() {
    // Input
    let divida = parseFloat(document.getElementById("divida").value);
    let juro = parseFloat(document.getElementById("juro").value);
    let anos = parseFloat(document.getElementById("anos").value);
    // Validação 
    if(isNaN(divida) || isNaN(juro) || isNaN(anos)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let juroMensal = (juro/100) / 12;
        let numMensal = anos * 12;

        let output = (divida * juroMensal * Math.pow(1 + juroMensal, numMensal)) / (Math.pow(1 + juroMensal, numMensal) - 1)
        document.getElementById("output").innerText = output.toFixed(2) + "€";  
    }
}



// Função para calcular a Taxa de Esforço
function calcularTaxaDeEsforço() {
    // Input
    let prestacoes = parseFloat(document.getElementById("prestacoes").value);
    let rendimento = parseFloat(document.getElementById("rendimento").value);
    // Validação 
    if(isNaN(prestacoes) || isNaN(rendimento)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let output = ((prestacoes / rendimento) * 100).toFixed(2)
        document.getElementById("output").innerText = output + "%";  
    }
}



// Função para calcular Mais Valias
function calcularMaisValias() {
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const encargos = parseFloat(document.getElementById("encargos").value);
    const valorAquisicao = parseFloat(document.getElementById("valorAquisicao").value);
    const despesasMelhorias = parseFloat(document.getElementById("despesasMelhorias").value);

    if (isNaN(valorVenda) || isNaN(encargos) || isNaN(valorAquisicao) || isNaN(despesasMelhorias)) {
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let output = ((valorVenda - encargos) - (valorAquisicao + despesasMelhorias)).toFixed(2);
        document.getElementById("output").innerHTML = output + "€";
    }
    
}



// Função para calcular o Salario Liquido
function calcularSalario() {
    // Input
    let remuneracao = parseFloat(document.getElementById("remuneracao").value);
    let valorIRS = parseFloat(document.getElementById("perIRS").value);
    let valorSS = parseFloat(document.getElementById("perSS").value);
    // Validação 
    if(isNaN(remuneracao) || isNaN(valorIRS) || isNaN(valorSS)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let irs = remuneracao * (valorIRS / 100);
        let ss = remuneracao * (valorSS / 100);
        let output = (remuneracao - (irs + ss)).toFixed(2)
        document.getElementById("output").innerText = output + "€";
    }
}



// Função para calcular a Pensao Liquida
function calcularPensao() {
    // Obter valores dos campos de input
    const pensaoBruta = parseFloat(document.getElementById('pensaoBruta').value);
    const localizacao = document.getElementById('localizacao').value;
    const parcelaAbater = parseFloat(document.getElementById('parcelaAbater').value);

    if(isNaN(pensaoBruta) || localizacao == "" || isNaN(parcelaAbater)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
    let impostoRenda = 0;
    let contribuicaoPrevidenciaria = pensaoBruta * 0.11;

    if (localizacao == 'continental') {
        impostoRenda = pensaoBruta * 0.15;
    } else {
        impostoRenda = pensaoBruta * 0.12;
    }
    impostoRenda -= parcelaAbater;

    const pensaoLiquida = pensaoBruta - (impostoRenda + contribuicaoPrevidenciaria);
    document.getElementById('output').innerText = pensaoLiquida.toFixed(2) + "€";
    }
}




// Função para calcular Juros Compostos
function calcularJuros() {
    let valorInicial = parseFloat(document.getElementById("valorInicial").value);
    let jurosMensal = parseFloat(document.getElementById("jurosMensal").value);
    let numMeses = parseFloat(document.getElementById("numMeses").value);
    // Validação 
    if(isNaN(valorInicial) || isNaN(jurosMensal) || isNaN(numMeses)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
    // Calculo
        let output = (valorInicial * (Math.pow(1 + (jurosMensal / 100), numMeses))).toFixed(2)

        document.getElementById("output").innerText = output + "€";
    }
}

function submeterEmail() {
    let assunto = document.getElementById("assunto").value
    let mensagem = document.getElementById("mensagem").value

    console.log(assunto, mensagem)

    alert("Assunto: " + assunto + "\nMensagem: " + mensagem)
}