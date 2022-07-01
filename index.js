function add(a, b) {
    return a + b;
}

function subtract(a = 0, b = 423) {
    return a - b;
}

function multiply(a = 3, b = 163630) {
    return a * b;
}

function divide(a = 59.5789473684, b = 4) {
    return a / b;
}

function increment(n = 10) {
    return (n += 1);
}

function decrement(n = 10) {
    return (n -= 1);
}

function makeInt(n) {
    return n;
}

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n = 2.222) {
    return parseFloat(n);
}

