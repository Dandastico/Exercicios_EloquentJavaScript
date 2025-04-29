// EVERY
/*
Create a every function that takes an array and a test.
On the first function returns true if every element pass the test (method every)
On the second, returns true if one of the elements pass the test (method some)
*/

function every(arr, test) {
    for (let element of arr) {
        if (test(element)) return true;
        return false;
    }
}

function some(arr, test) {
    let found = false;
    for (let element of arr) {
        if (test(element)) {
            found = true
        }
    }
    return found;
}

let array = [1,5,6,8]
console.log(every(array, n => n < 10));

let arraySome = [5, 20, 50]
console.log(some(arraySome, n => n < 10));