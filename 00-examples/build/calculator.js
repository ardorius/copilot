"use strict";
//create function calculate
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return NaN;
    }
}
console.log(calculate(1, 2, '+')); // 3
console.log(calculate(1, 2, '-')); // -1
console.log(calculate(1, 2, '*')); // 2
console.log(calculate(1, 2, '/')); // 0.5
console.log(calculate(1, 2, 'a')); // NaN
