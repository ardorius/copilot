//create function calculate
function calculate(a: number, b: number, operator: string): number {
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
            return 0;
    }
}

//test
console.log(calculate(1, 2, '+'));
