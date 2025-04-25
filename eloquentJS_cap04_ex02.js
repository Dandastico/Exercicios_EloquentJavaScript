// REVERSING AN ARRAY
/*
Preciso criar minhas versões dos métodos Array.reverse() e Array.toReversed()
elas se camarão reverseArrayInPlace e reverseArray, respectivamente
*/

function reverseArray(arr) {
    let copy = []
    let size = arr.length
    for (let i = size; i > 0; i--) {
        copy.push(arr[i-1]);
    }
    return copy;
}
let myArray = ['A', 'B', 'C'];
console.log(reverseArray(myArray));

function reverseArrayInPlace(arr) {
    let temp;
    let rep = Math.floor(arr.length / 2);
    for (let i = 0; i < rep; i++) {
        let mirror = arr.length - i - 1;
        temp = arr[i];
        arr[i] = arr[mirror];
        arr[mirror] = temp;
    }
    return arr;
}
let numbers = [0,1,2,3,4,5];
reverseArrayInPlace(numbers);
console.log(numbers);