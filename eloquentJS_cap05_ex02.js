// YOUR OWN LOOP
/*
Create your own loop function that should take a value, a test function,
an update function and a body function.

Each iteration, it should first run the test function on the current loop value
and stop if that returns false.

Call the body funtion, giving it the current value

When defining the function, you can use a regular loop to do the actual looping.
*/

// author's answer
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

// vou tentar fazer igual, mas de um jeito que eu verdadeiramente entenda ehehe
function test(n) {
    if (n <= 10) return true;
    else return false;
}

function update(n) {
    return n + 1;
}

function body(n) {
    console.log(n);
}

function myLoop(n) {
    if (!test(n)) return;
    while (n <= 10) {
        body(n);
        update(n);
    }
}

myLoop(1);

// não funcionou, fiquei triste