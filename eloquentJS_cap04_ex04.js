// DEEP COMPARISON
/*
create a function that returns true if two objects are the same value or are objects
with the same properties.
Some importante details:
— the function deepEqual must be recursive
— deep comparison only if the two arguments are objects
— the null is a object, so be carefull
*/

function deepEqual(a,b) {
    // se a e b não forem objetos, retorne verdadeira
    if (a === b) return true;

    // se a ou b for "null"
    if (a == null || b == null) return false;

    // se a ou b não forem objetos enquanto o outro é
    if (typeof a != "object" || typeof b != "object") return false;

    let keysOfA = Object.keys(a);
    let keysOfB = Object.keys(b);
    for (key of keysOfA) {
        // se chave de A não estiver presente em B ou as chaves de A e B
        // não retornar verdadeiro na primeira linha dessa função
        if (!keysOfB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    // chegou até aqui? então retorne "true"
    return true;
}


// outro jeito de escrever a parte recursiva
function deepEqual(a,b) {
    if (a === b) return true;

    if (a == null || b == null || typeof a != "object" || typeof b != "object") {
        return false;
    }
    
    const keysOfA = Object.keys(a);
    const keysOfB = Object.keys(b);

    // já retorna falso se o comprimento delas é diferente
    if (keysOfA.length !== keysOfB.length) return false;

    // método every() checa cada elemento da estrutura e passa por uma verificação até
    // encontrar algo que retorna "false"
    return keysOfA.every(key =>
        // cada chave de a deve estar em b e passar por essa mesma função retornando "true"
        keysOfB.includes(key) && deepEqual(a[key], b[key])
    );
}