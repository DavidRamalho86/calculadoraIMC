function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * altura);

    let classificacao;
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau 1 (leve)';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau 2 (moderada)';
    } else {
        classificacao = 'Obesidade Grau 3 (grave)';
    }

    const resultado = `Olá, ${nome}! Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;

    document.getElementById('resultado').textContent = resultado;
}
