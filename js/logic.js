// Função para calcular o IMI
function calcularIMI() {
    let valorPatrimonial = parseFloat(document.getElementById("valorPatrimonial").value);
    let taxaIMI = parseFloat(document.getElementById("taxaIMI").value)
    
    document.getElementById("output").innerHTML = (valorPatrimonial * taxaIMI).toFixed(2) + "%";
}



// Função para calcular o IMT
function calcularIMT() {
    
    
}



// Função para calcular a Taxa Euribor
function calcularEuribor() {
    
    
}



// Função para calcular a Taxa de Esforço
function calcularTaxaDeEsforço() {
    let prestacoes = parseFloat(document.getElementById("prestacoes").value);
    let rendimento = parseFloat(document.getElementById("rendimento").value);

    document.getElementById("output").innerText =( (prestacoes / rendimento) * 100).toFixed(2) + "%";
}



// Função para calcular Mais Valias
function calcularMaisValias() {
    
    
}



// Função para calcular o Salario Liquido
function calcularSalario() {
    let remuneracao = parseFloat(document.getElementById("remuneracao").value);
    let valorIRS = parseFloat(document.getElementById("perIRS").value);
    let valorSS = parseFloat(document.getElementById("perSS").value);

    let irs = parseFloat(remuneracao * (valorIRS / 100));
    let ss = parseFloat(remuneracao * (valorSS / 100));

    let output = (remuneracao - (valorIRS + valorSS)).toFixed(2)

    document.getElementById("output").innerText = output + "€";
}



// Função para calcular a Pensao Liquida
function calcularPensao() {
    
    
}


// Função para calcular Juros Compostos
function calcularJuros() {
    
    
}