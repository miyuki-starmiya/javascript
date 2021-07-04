
'use strict';
let scores = [60, 70, 80];
let other = [10, 20, 30];
const print = console.log;

function sum(a,b,c) {
    return a+b+c;
}

let s = sum(...scores);
print(s);
