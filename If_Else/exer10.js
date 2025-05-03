let ano = 2024;

if ((ano % 4 === 0 && 100 !== 0 ) || (ano % 400 === 0)){
    console.log('esse ano é bissexto');
} else {
    console.log('esse ano não é bissexto');
}
