let num1 = 10;
let num2 = 2;
let num3 = 30;
let menor;

if (num1 <= num2 && num1 <= num3){
    menor = num1;
} else if (num2 <= num1 && num2 <= num3){
    menor = num2;
} else {
    menor = num3;
}
console.log('o menor número entre os 3 é: ' + menor);