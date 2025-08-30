function adicionarlog(){
    let divlogs = document.querySelector(".logs");

 

let tagp = document.createElement ("p");
tagp.innerHTML= " Exercicio executado ás " + new Date().toLocaleDateString() + "ás" + new Date().toLocaleTimeString();

divlogs.appendChild(tagp);


}









function exercicio01() {
    
let idade = prompt("qual a idade?");
if (idade>=18){
alert("parabèns! você e maior de idade.") 

} else {
alert("vai pra Super Nani!");
} 
adicionarlog();

}



function exercicio02(){
    
 let numero = prompt("digite um número.");
 if ( numero >= 0) {
    alert ("positivo.");
 }else {
    alert ("Negativo.");
 }
}

function exercicio03(){

    let nummero = prompt(" insere a nota de 0 a 100");

if ( nummero >= 60 ) {

alert( "aprovado." );

}else{

    alert( "Reprovado. ");
}

}

function exercicio04(){

    let numero = prompt("digie um número");
if (numero > 0) {
    alert("Positivo.");
} else {

    if (numero < 0) {
        alert("Negativo.");
    } else {
        alert("Zero.");
    }
}
}

function exercicio05(){
    let idade = prompt("insira a sua idade");
if ( idade > 0 && idade <= 12 ){
    alert("Criança.");
} else if (idade >= 13 && idade <= 17){
    alert("Adolecente.");
}else{
    alert("Adulto.")
}
}
function exercicio06(){
    
let numero = prompt(" inserir um número");

if ( numero % 2== 0){
    alert("Par.")
}else{
    alert("Impar.")
}
}

function exercicio07(){
    
let numero1 = Number (prompt ("insira um número"));

let operacao = prompt("operação(+, -, *, /).");

let numero2 = Number  (prompt ("insira um número"));

if (operacao == "+"){
    alert( numero1 + numero2 );
}

else if (operacao == "-"){
    alert( numero1 - numero2  );
}


else if (operacao == "*"){
    alert( numero1 * numero2  );

}else if (operacao == "/"){
    alert( numero1 / numero2  );
}
}


function exercicio08(){
    let usuario = prompt("usuario");
let senha = prompt("senha");
if(usuario == "admin" & senha == "1234"){
    alert("Login bem-sucedido")
} else{
    alert("Acesso negado")
} 
}

function exercicio09(){
let a = prompt("numero");  
let b = prompt("numero"); 
let c = prompt("numero"); 
if ( a > b && a > c ){
    alert("numero maior"  +  a)
} else if(b>a && b > c){
    alert("numero maior"  +  b)
}else{
    alert("numero maior"  +  c)
}
}


function exercicio10(){

let valor = Number(prompt("digite o valor"));
if (valor > 100) {
    alert( valor-(valor * 0.1) );
} else{
    alert(valor);
}

let a = Number(prompt("número1"));
let b = Number(prompt("número2"));
let c = Number(prompt("número3"));

if( a == b && a == c ){
    alert("triângulo equilátero");
} else if (a == b && a != c){
    alert("triângulo   isósceles");
}else{
    alert(" triângulo escaleno")
}
}

