/*1ª parte

A academia 'Vida Ativa' contratou seus serviços para implementar uma solução em JavaScript que calcule o Índice de Massa Corporal (IMC) de seus alunos.
 Duas medidas já foram registradas:
 
1 - Maria, com 55 kg, 1,65 m e 25 anos,
2 - Pedro, com 70 kg, 1,80 m e 28 anos.

Utilizando a fórmula IMC = peso (kg) / (altura (m))^2, desenvolva um programa que calcule o IMC de cada aluno.
Após o cálculo, classifique Maria e Pedro de acordo com as faixas de IMC e forneça uma breve recomendação com base na classificação de saúde.
*/

//Definindo as informações de Maria
const pesoMaria = 55; //em kg
const alturaMaria = 1.65; // em metros
const idadeMaria = 25;// em anos

//Definindo as informações de Pedro
const pesoPedro = 70; //em kg
const alturaPedro = 1.80; // em metros
const idadePedro = 28;// em anos

//função para calcular o IMC
function calcularIMC (peso, altura) {
    return peso / (altura*altura);
}

//calculando o IMC de Maria
const imcMaria = calcularIMC(pesoMaria, alturaMaria);

//calculando o IMC de Pedro
const imcPedro = calcularIMC(pesoPedro, alturaPedro);

//exibindo os atributos
alert("IMC Maria: ", imcMaria.toFixed(2));
alert("IMC de Pedro: ", imcPedro.toFixed(2));