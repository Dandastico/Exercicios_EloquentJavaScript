// THE SUM OF A RANGE
/* 
Create 2 functions:
range(start, end, step=1) return an array with arr[0] == start, arr[-1] == end, step is the increment
sum(start, end) will sum (of course) all the int numbers in the range of start and end
*/

function range(start, end, step=1) {
    let numbers = [];
    if (step > 0) {
        for (start; start <= end; start += step) {
            numbers.push(start);
        }
    } else {
        for (start; start >= end; start += step) {
            numbers.push(start);
        }
    }
    return numbers;
}


function sum(numbers) {
    let total = 0
    for (let n of numbers) total += n;
    return total;
}


// author's solution
// a exppressão ternária em step tem duas opções de incremento, ao contrário da minha
function range(start, end, step = start < end ? 1:-1) {
    let array= [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}