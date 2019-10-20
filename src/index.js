function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    let arrN = expr.split('');
    let arr = arrN.filter((item,i) => item[i] !== '');
    let a = +arr[0];
    let b = +arr[2];
    let c = arr[1];
 if (c === ' + ') {
    return 4;
        } else if (c === '-') {
            return a - b;
        }  else if (c === '*') {
            return a * b;
        } else if (c === '/') {
            if (b === 0) {
                Error("TypeError: Division by zero.")
            }
            return a / b;
        }
        
}

module.exports = {
    expressionCalculator
}