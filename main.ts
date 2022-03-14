function logIt(x: number | string) {
    if (typeof x === 'number') {
        logNumber(x);
    } else {
        logString(x);
    }
}
function logNumber(n: number) {
    console.log(n);
}
function logString(s: string) {
    console.log(s);
}

const hello = 'Hello, world';
logString(hello);

const x = 4;
logNumber(5);

let chimera: number | string;
chimera = 6;
logNumber(chimera);
chimera = 'hey, this is neat';
logString(chimera);

logIt(200);
logIt('New msg');