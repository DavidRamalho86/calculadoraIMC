/*2ª parte
Agora, na segunda parte, crie uma interface interativa usando HTML/CSS/jS para permitir que novos alunos ingressem suas informações, incluindo nome, idade, peso e altura.

 Utilize esses dados para calcular o IMC, classificar de acordo com as faixas e fornecer recomendações.
 Sua contribuição é vital para ajudar a academia 'Vida Ativa' a promover hábitos saudáveis entre seus alunos.

 Certifique-se de criar uma experiência amigável e demonstre suas habilidades em JavaScript para garantir uma página desenvolvida de forma positiva."

    IMC                    : Classificação
Menor que 18,5    : Abaixo do peso
18,5 - 24,9             : Peso normal
25,0 - 29,9             : Sobrepeso
30,0 - 34,9             : Obesidade Grau I (leve)
35,0 - 39,9             : Obesidade Grau II (moderada)
Maior que 40        : Obesidade Grau III (grave).
*/


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
        classificacao = 'Obesidade Grau I (leve)';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II (moderada)';
    } else {
        classificacao = 'Obesidade Grau III (grave)';
    }

    const resultado = `Olá, ${nome}! Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}.`;

    document.getElementById('resultado').textContent = resultado;
}
