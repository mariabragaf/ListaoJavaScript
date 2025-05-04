let operação = '/'
let num1 = 20
let num2 = 4

switch (operação) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        console.log(num1 / num2);
        break;
    default:
        console.log('operação inválida');


}