function calcularSoma() {
    var INDICE = 13;
    var SOMA = 0;
    var K = 0;
    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }
    return SOMA;
}
console.log("O valor da vari\u00E1vel SOMA ao final do processamento \u00E9: ".concat(calcularSoma()));
