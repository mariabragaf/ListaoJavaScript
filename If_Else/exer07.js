let salário = 3.200;
let desconto;

if (salário > 2000){
    desconto = salário *0.1;
} else {
    desconto = salário *0.05;

let final = salário - desconto;

    console.log('salário com desconto de: R$' + final);
}