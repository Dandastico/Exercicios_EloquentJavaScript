// REDUCE E CONCAT
/*
Use reduce method and concat method to "flatten" an array of arrays into a single array
*/

// O reduce itera sobre a lista e roda ela numa função.
// a função sem nome tem dois parâmetros: o acc e o currentArray.
// O valor de acc começa com [], de acordo com o segundo parâmetro em reduce

let arrays = [[1, 2, 3], [4, 5], [6]];

let flatArray = arrays.reduce((acc, currentArray) => {
    return acc.concat(currentArray);
}, []);

console.log(flatArray);

// versão reduzida do código acima

let flattenedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);