//var nome = "Rafael Galleani";
//var idade = 29;
//var frase = "Japão é o melhor time do mundo";

//alert("Meu primeiro js");
//alert("Bem vindo, " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(frase);
//alert(frase.replace("Japão", "Brasil"));

//console.log(nome + " " + idade);
//console.log(nome);
//console.log(idade);
//console.log(frase);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());




//var lista = ["maçã", "pêra", "laranja"];

//lista.pop();
//lista.push("uva"); 
//console.log(lista);
//console.log(lista[1][0]);
//console.log(lista[1][1]);
//console.log(lista[1][2]);
//console.log(lista[1][3]);
//console.log(lista[0]);
//console.log(lista[1]);
//console.log(lista[2]);
//console.log(lista[0].toString());
//console.log(lista.toString());
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.join(", "));



//var fruta = {nome:"maçã", cor: "vermelha"}

//console.log(fruta.nome);
//alert(fruta.cor);



//var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"uva", cor: "Violeta/Verde"}];

//console.log(frutas[1].nome);
//alert(frutas[1].cor);



//var idade = prompt("Qual é sua idade?");

/*
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/


//var count = 0;

/*
while(count <=5){
    console.log(count);
    alert(count);
    count = count + 1;
}
*/



//var count;

/*
for(count=0; count<=5; count=count+1){
    alert(count);
    console.log(count);
}
*/



//var d = new Date();

//alert(d);
//alert(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear());



/*
function sum(n1,n2){
    return n1 + n2;
}

function setReplace(phrase, name, new_name){
    return phrase.replace(name, new_name)
}
*/

//alert(sum(5,4));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));


//GLOBAL
//var validar = 0;

/*
function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
*/

//var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));
//console.log(validar);



function button(){
    alert("Obrigado por clicar");   
}
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
}