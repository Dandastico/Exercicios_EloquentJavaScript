// A LIST
// Create a function that builds up a list from an array
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length; i > 0; i--) {
        list = {value: arr[i-1], rest: list};
    }
    return list
}
console.log(arrayToList([1,2,3]));

