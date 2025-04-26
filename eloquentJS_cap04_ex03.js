// A LIST
/*
Create 4 different functions:
— arrayToList() that create a list from an array
— listToArray() that create am array from a list
— prepend() function that adds a element at the start of the list
— a recursive function of array that searches for the node.value at a given index
*/

// Function that builds up a list from an array
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length; i > 0; i--) {
        list = {value: arr[i-1], rest: list};
    }
    return list
}
console.log(arrayToList([1,2,3]));

// Function that builds an array from a list
function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        // add at last pos the value of node
        arr.push(node.value);
    }
    return arr;
}

// Function that adds a node at the start of the list
function prepend(value, list) {
    return {value, rest: list};
}

// Recursive function that searches for node.value at a given index
function nth(list, idx) {
    if (!list) return undefined;
    else if (idx == 0) return list.value;
    else return nth(list.rest, idx - 1);
}