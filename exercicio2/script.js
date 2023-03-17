//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
//O primeiro numero é maior que o segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true
//divisível = com resto zero
//Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!

let num1 = Number(prompt('Insira um número:'));
console.log("Primeiro numero é:" , num1);

let num2 =Number(prompt('Insira outro número:'));
console.log("Segundo número é:" ,num2);

console.log ("O primeiro numero é maior que o segundo?" ,num1 > num2);
console.log ("Os números são iguais?" ,num1 === num2);
console.log ("O primeiro número é maior ou igual ao segundo?" ,num1 >= num2);

console.log ("O primeiro número é divisível pelo segundo?" ,(num1 % num2) === 0);
console.log ("O segundo número é divisível pelo primeiro?"  ,(num2 % num1) === 0);
