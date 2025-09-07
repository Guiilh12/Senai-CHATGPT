//exercicio 1 //

//let idade = prompt("qual a idade?");
//if (idade>=18){
// alert("parabèns! você e maior de idade.") 

//} else {
// alert("vai pra Super Nani!");

//exercicio 2

//  let numero = prompt("digite um número.");
//  if ( numero >= 0) {
//     alert ("positivo.");
//  }else {
//     alert ("Negativo.");
//  }


//exercicio 3
// let nummero = prompt(" insere a nota de 0 a 100");

// if ( nummero >= 60 ) {

// alert( "aprovado." );

// }else{

//     alert( "Reprovado. ");
// }


//exercicio 4

// let numero = prompt("digie um número");
// if (numero > 0) {
//     alert("Positivo.");
// } else {

//     if (numero < 0) {
//         alert("Negativo.");
//     } else {
//         alert("Zero.");
//     }
// }

// exercicio 5

// let idade = prompt("insira a sua idade");
// if ( idade > 0 && idade <= 12 ){
//     alert("Criança.");
// } else if (idade >= 13 && idade <= 17){
//     alert("Adolecente.");
// }else{
//     alert("Adulto.")
// }

// exercicio 6 
// let numero = prompt(" inserir um número");

// if ( numero % 2== 0){
//     alert("Par.")
// }else{
//     alert("Impar.")
// }



// exercicio 7


// let numero1 = Number (prompt ("insira um número"));

// let operacao = prompt("operação(+, -, *, /).");

// let numero2 = Number  (prompt ("insira um número"));

// if (operacao == "+"){
//     alert( numero1 + numero2 );
// }

// else if (operacao == "-"){
//     alert( numero1 - numero2  );
// }


// else if (operacao == "*"){
//     alert( numero1 * numero2  );

// }else if (operacao == "/"){
//     alert( numero1 / numero2  );
// }

// exercicio 8

// let usuario = prompt("usuario");
// let senha = prompt("senha");
// if(usuario == "admin" & senha == "1234"){
//     alert("Login bem-sucedido")
// } else{
//     alert("Acesso negado")
// // } 

// exercicio 9

// let a = prompt("numero");  
// let b = prompt("numero"); 
// let c = prompt("numero"); 
// if ( a > b && a > c ){
//     alert("numero maior a")
// } else if(b>a && b > c){
//     alert("numero maior b")
// }else{
//     alert("numero maior c")
// }


// exercicio 10

// let valor = Number(prompt("digite o valor"));
// if (valor > 100) {
//     alert( valor-(valor * 0.1) );
// } else{
//     alert(valor);
// }

// let a = Number(prompt("número1"));
// let b = Number(prompt("número2"));
// let c = Number(prompt("número3"));

// if( a == b && a == c ){
//     alert("triângulo equilátero");
// } else if (a == b && a != c){
//     alert("triângulo   isósceles");
// }else{
//     alert(" triângulo escaleno")
// }

// exercicio 11 

// let numero =  prompt("insere uma nota (0-100).")
// if (numero >=90 && numero <= 100){
//     alert("A");
// }else if ( numero >= 80 && numero <= 89 ){
//     alert("B");
// }else if(numero >= 70 && numero <= 79 ){
//     alert("C");
// }else if (numero >= 60 && numero <= 69){
//     alert("D")
// }else{
//     alert("F")
// }


// exercicio 12

// let peso = Number (prompt("digite o peso"));
// let altura = Number (prompt("digite o altura"));
// let resultado = peso/(altura*altura);

// if ( resultado < 18.5){
//     alert( resultado + " Abaixo do peso. " );
// }else if ( resultado >= 18.5 && resultado <= 24.9){
//     alert(resultado + " Peso Normal ");
// }else if (resultado >= 25 && 29.9 ){
//     alert( resultado + "Sobre Peso.");
// }else(resultado +  "Obesidade.")


// exercicio 13
// let ano = Number( prompt(" digiteo ano "));
// if(ano % 4 === 0 && ano % 100 !== 0){
//     alert("é bissexto.");
// }else if(ano % 400 === 0){
//     alert("é bissexto.");
// }else{
//     alert("Não  é bissexto.");
// }