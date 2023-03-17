// ### Parte 1
//a) 5 é maior que 20 e também é menor que 2;
console.log(5 > 20 && 5 < 2);
// Saída: Falso

// b) 5 é igual a 5 ou é igual a “5”;
console.log(5 === 5 || 5 === "5");
// Saída: Verdadeiro

// c) negação de (vinte é maior que cinquenta)
console.log(!(20 > 50));
// Saída: Verdadeiro

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
console.log(!(20 > 50 || 50 > 60));
// Saída: Verdadeiro



// ### Parte 2
// **O funcionário José de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):
// a) Auxílio creche por filho:R$ 45,50
// b) Comissão de 10% sobre o total de vendas mensal
// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00
// d)  Desconto do INSS 5% do salário

const salarioFixo = 2000.00;
const auxilioCreche = 45.5/2;
const comissao = 10/100;
const vendasJaneiro = 5784.50;
const vendasFevereiro = 3418.41;
const vendasMarco = 4124.00;
const vendasAbril = 1874.00;
const vendasMaio = 7000.00;
const vendasJunho = 9450.00;
const descontoINSS = 0.05;

//1) O salário fixo mais o auxílio creche
console.log (" O salário fixo mais o auxílio creche:", salarioFixo + auxilioCreche);

// 2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log ("comissão em janeiro:", (vendasJaneiro * comissao).toFixed(2));

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)
console.log ("INSS de Janeiro:", ((salarioFixo + (vendasJaneiro * comissao)) * descontoINSS).toFixed(2))

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

const salarioJaneiro = salarioFixo + vendasJaneiro * comissao;
const descontoJaneiro = salarioJaneiro - descontoINSS;
const salarioLQJaneiro = salarioJaneiro - descontoJaneiro + auxilioCreche
console.log ("Salário Janeiro:" , salarioLQJaneiro.toFixed(2))

const salarioFevereiro = salarioFixo + vendasFevereiro * comissao;
const descontoFevereiro = salarioFevereiro * descontoINSS;
const salarioLQFevereiro = salarioFevereiro - descontoFevereiro + auxilioCreche
console.log ("Salário Fevereiro:" , salarioLQFevereiro.toFixed(2))

const salarioMarco = salarioFixo + vendasMarco * comissao;
const descontoMarco = salarioMarco * descontoINSS;
const salarioLQMarco = salarioMarco - descontoMarco + auxilioCreche
console.log ("Salário Março:" , salarioLQMarco.toFixed(2))

const salarioAbril = salarioFixo + vendasAbril * comissao;
const descontoAbril = salarioAbril * descontoINSS;
const salarioLQAbril = salarioAbril - descontoAbril + auxilioCreche
console.log ("Salário Abril:" , salarioLQAbril.toFixed(2))

const salarioMaio = salarioFixo + vendasMaio * comissao;
const descontoMaio = salarioMaio * descontoINSS;
const salarioLQMaio = salarioMaio - descontoMaio + auxilioCreche
console.log ("Salário Maio:" , salarioLQMaio.toFixed(2))

const salarioJunho = salarioFixo + vendasJunho * comissao;
const descontoJunho = salarioJunho * descontoINSS;
const salarioLQJunho = salarioJunho - descontoJunho + auxilioCreche
console.log ("Salário Junho:" , salarioLQJunho.toFixed(2))

const mediaSalarial = ((salarioLQJaneiro + salarioLQFevereiro + salarioLQMarco + salarioLQAbril + salarioLQMaio + salarioLQJunho) / 6)
console.log ("A média do salário é de ", mediaSalarial.toFixed(2))

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
//   (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)