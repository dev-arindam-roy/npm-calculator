function add(a, b) {
    return a+b;
}
function sub(a, b) {
    return a-b;
}
function mul(a, b) {
    return a*b;
}
function div(a, b) {
    return (b === 0) ? 'infinity' : (a/b);
}
function sqrt(a) {
    return a*a;
}
function cube(a) {
    return sqrt(a)*a;
}

module.exports = {
    add,
    sub,
    mul,
    div,
    sqrt,
    cube
}