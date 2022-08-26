respostas = []

const calcular_imc = () => {
    let altura = document.getElementById("altura").value 
    let peso = document.getElementById("peso").value

    let resultado = (Math.round((peso / altura ** 2) * 100)) / 100
    document.getElementById("resultado").value = resultado
    respostas.push(resultado)
    console.log("Resultado: " + resultado);
}

function limpar() {
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
}

document.getElementById("calcular").addEventListener("click", calcular_imc)

document.getElementById("limpar").addEventListener("click", limpar)