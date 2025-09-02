function demoFilter(){

const numeros = [1, 2, 3, 4, 5, 6];

let maiorquedois = numeros.filter(numero => numero > 2); 

console.log(maiorquedois);

}
function demoFind(){
    let produtos = [{
        id: "1",
        nome: "Teclado",
        preco:100
    },
{
    id:"2",
     nome:"Mouse",
     preco:"50"
}, 
{
    id:"3",
    nome:"Monitor",
    preco:"700"
}];

const produtocaro = produtos.find(produto => produto == 700);
console.log(produtocaro);
}

function demomap(){
    const numeros = [1, 2, 3, 4, 5, 6,]
const numerosdobras = numeros.map(numero => numero *2);
console.log(numerosdobras)
}