"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIt = void 0;
function logIt(x) {
    if (typeof x === 'number') {
        logNumber(x);
    }
    else {
        logString(x);
    }
}
exports.logIt = logIt;
function logNumber(n) {
    console.log(n);
}
function logString(s) {
    console.log(s);
}
