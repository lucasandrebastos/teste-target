"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function isFibonacci(number) {
    var _a;
    var a = 0, b = 1;
    if (number === 0 || number === 1) {
        return true;
    }
    while (b < number) {
        _a = [b, a + b], a = _a[0], b = _a[1];
    }
    return b === number;
}
function checkFibonacci() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", function (input) {
        var userInput = parseInt(input);
        if (isNaN(userInput)) {
            console.log("Por favor, insira um número válido.");
        }
        else {
            if (isFibonacci(userInput)) {
                console.log("O n\u00FAmero ".concat(userInput, " pertence \u00E0 sequ\u00EAncia de Fibonacci."));
            }
            else {
                console.log("O n\u00FAmero ".concat(userInput, " n\u00E3o pertence \u00E0 sequ\u00EAncia de Fibonacci."));
            }
        }
        rl.close();
    });
}
checkFibonacci();
