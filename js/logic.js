//Função de validação de input
function validation() {

}


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
    var prestacoes = parseFloat(document.getElementById("prestacoes").value);
    var rendimento = parseFloat(document.getElementById("rendimento").value);
    var taxaDeEsforco = (prestacoes / rendimento) * 100;

    document.getElementById("output").innerText = taxaDeEsforco.toFixed(2) + "%";
}



// Função para calcular Mais Valias
function calcularMaisValias() {
    
    
}



// Função para calcular o Salario Liquido
function calcularSalario() {
    
    
}



// Função para calcular a Pensao Liquida
function calcularPensao() {
    
    
}


// Função para calcular Juros Compostos
function calcularJuros() {
    
    
}