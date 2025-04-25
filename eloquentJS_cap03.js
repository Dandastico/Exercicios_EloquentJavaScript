// CAPÍTULO 03
// MINIMUM
/*
Criar substituto de Math.min() que retorna o menor valor numérico entre dois argumentos
*/
const min = function(a,b) {
    return (a < b) ? a:b;
}
console.log(min(1,2));
console.log(min(5,3));

// author solution
function min(a, b) {
    if (a < b) return a;
    else return b;
}
console.log(min(1,2));
console.log(min(5,3));


// RECURSION
// recursão que verifica os números pares até chegar a 0

function even(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return even(-n);
    } else {
        return even(n - 2);
    }
}
console.log(even(50));
console.log(even(25));
console.log(even(-2));

// author's solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(25));
console.log(isEven(50));
console.log(isEven(-50));


// BEAN COUNTING
// count amount of upper-case 'B' in a string
// count amount of a user given character
let s = "Tem um B maiusculo nessa frase"
function countBs(s) {
    let count = 0;
    for (let char of s) {
        if (char == 'B') count += 1;
    }
    return count;
}
console.log(countBs(s));

// funcão que procura qualquer letra numa string
let txt = "Tem um B miusculo nessa frase";
let target = 'm';

function countChar(txt, target) {
    let count = 0;
    for (let char of txt) {
        if (char == target) count += 1;
    }
    return count;
}
console.log(countChar(txt, target));