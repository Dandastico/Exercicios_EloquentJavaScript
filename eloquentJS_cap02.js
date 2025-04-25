// TRIANGLE

let block = '#';
let line;
for (let i = 0; i < 7; i++) {
    line = ''
    for (let j = 0; j <= i; j++) {
        line += block;
    }
    console.log(line);
}

// solução do autor
for (let line = '#'; line.length < 8; line += '#') {
    console.log(line)
}

/*
FIZZBUZZ
Program that print 1 thought 100 inclusive, changing numbers divisible by 3 to 'Fizz', divisible by 5 to 'Buzz', divisivle by 3 and 5 to 'FizzBuzz'
*/

for (let i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log("FizzBuzz");
    } else if (i%3==0) {
        console.log("Fizz");
    } else if (i%5==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// solução do autor
for (let n = 1; n <= 100; n++) {
    let output = '';
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    // se output não estiver vazio, imprima output, senão imprima n
    console.log(output || n);
}

/*
CHESSBOARD
Program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
The lines are composed of ' ' and '#'
*/
let board = '';
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0) {
            board += (j % 2 == 0) ? ' ':'#';
        } else {
            board += (j % 2 == 0) ? '#':' ';
        }
    }
    board += '\n';
}
console.log(board);

// author's solution
let size = 8;
let boards = '';

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            boards += ' ';
        } else {
            boards += '#';
        }
    }
    boards += '\n';
}
console.log(boards);