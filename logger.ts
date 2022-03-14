export function logIt(x: number | string) {
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