function add (a, b) {

    return a + b;
}

function multiply (a, b) {

    return a * b;

}

function divide (a, b) {

    return a / b;

}

function subtract (a, b) {

    return a - b;

}

n =  23;

function increment(n){
    return (n += 1);
}
function decrement(n){
    return (n -= 1);
}
increment(n);
decrement(n);

n="2";
function makeInt(n){
    return parseInt(n, 10);
}
makeInt(n);