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
function calcularIMT() {
    // Input
    let valorImovel = parseFloat(document.getElementById("valorImovel").value);
    let tipoHabitacao = document.getElementById("tipoHabitacao").value;
    let localizacao = document.getElementById("localizacao").value;

    let fatorRegiaoAutonoma = 0.875;
    let imt;

    console.log(valorImovel)
    console.log(tipoHabitacao)
    console.log(localizacao)

    // Validação
    if (isNaN(valorImovel)) {
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        // Tabelas e Calculos
        if (tipoHabitacao == "propria_permanente") {
            if (valorImovel <= 97064) {
                imt = 0;
            } else if (valorImovel <= 132774) {
                imt = (valorImovel - 97064) * 0.02 - 1941.28;
            } else if (valorImovel <= 181034) {
                imt = (valorImovel - 132774) * 0.05 - 5895.64;
            } else if (valorImovel <= 301688) {
                imt = (valorImovel - 181034) * 0.07 - 9287.56;
            } else if (valorImovel <= 603274) {
                imt = (valorImovel - 301688) * 0.08 - 12785.88;
            } else {
                imt = valorImovel * 0.06;
            }
        } else if (tipoHabitacao == "secundaria") {
            if (valorImovel <= 97064) {
                imt = valorImovel * 0.01;
            } else if (valorImovel <= 132774) {
                imt = (valorImovel - 97064) * 0.02 + 970.64;
            } else if (valorImovel <= 181034) {
                imt = (valorImovel - 132774) * 0.05 - 3941.28;
            } else if (valorImovel <= 301688) {
                imt = (valorImovel - 181034) * 0.07 - 9287.56;
            } else if (valorImovel <= 603274) {
                imt = (valorImovel - 301688) * 0.08 - 12785.88;
            } else {
                imt = valorImovel * 0.06;
            }
        }
    }   
    if (localizacao == "regiao_autonoma") {
        imt = imt * fatorRegiaoAutonoma;
    }
    if (imt > 0){
        document.getElementById("output").innerHTML = imt.toFixed(2) + "€"
    } else {
        document.getElementById("output").innerHTML = "Isento"
    }
} 




// Função para calcular a Taxa Euribor
function calcularEuribor() {
    // Input
    let principal = parseFloat(document.getElementById('principal').value);
    let euribor = parseFloat(document.getElementById('euribor').value);
    let duration = parseInt(document.getElementById('duration').value);

    const euriborRates = {
        '1': 3.816,
        '3': 3.813,
        '6': 3.787
    }

    if (isNaN(principal) || isNaN(euribor) || isNaN(duration)) {
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {
        document.getElementById("error").innerHTML = ""
        duration /= 30
        
        if (duration <= 1) {
            adjustedEuribor = euriborRates['1'];
        } else if (duration <= 3) {
            adjustedEuribor = euriborRates['3'];
        } else {
            adjustedEuribor = euriborRates['6'];
        }
    
        let monthlyRate = adjustedEuribor / 100 / 12;
        let monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, - duration));
        document.getElementById('output').innerHTML = monthlyPayment.toFixed(2) + "; " + adjustedEuribor;
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
    let impostoRenda = 0;
    let contribuicaoPrevidenciaria = 0;
    let outrasDeducoes = 0;

    let pensaoBruta = document.getElementById("pensaoBruta").value;
    let localizacao = document.getElementById("localizacao").value;
    let dependentes = document.getElementById("dependentes").value;
    let dependentesDeficiencia = document.getElementById("dependentesDeficiencia").value;
    let parcelaAbater = document.getElementById("parcelaAbater").value;

    // Validação 
    if(isNaN(pensaoBruta) || localizacao == "" || isNaN(dependentes) || isNaN(dependentesDeficiencia) || isNaN(parcelaAbater)){
        document.getElementById("error").innerHTML = "Preencha todos os campos de input."
        document.getElementById("output").innerText = "";
    } else {

        if (localizacao === 'continental') {
            impostoRenda = pensaoBruta * 0.15 - parcelaAbater;
        } else {
            impostoRenda = pensaoBruta * 0.12 - parcelaAbater;
        }
        contribuicaoPrevidenciaria = pensaoBruta * 0.11;
        outrasDeducoes = dependentes * 50 + dependentesDeficiencia * 100;
    
        let output = (pensaoBruta - (impostoRenda + contribuicaoPrevidenciaria + outrasDeducoes));
        document.getElementById("output").innerHTML = output + "€";
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