"use strict";
function logIt(x) {
    if (typeof x === 'number') {
        logNumber(x);
    }
    else {
        logString(x);
    }
}
function logNumber(n) {
    console.log(n);
}
function logString(s) {
    console.log(s);
}
const hello = 'Hello, world';
logString(hello);
const x = 4;
logNumber(5);
let chimera;
chimera = 6;
logNumber(chimera);
chimera = 'hey, this is neat';
logString(chimera);
logIt(200);
logIt('New msg');
