var faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
function calcularPercentuais(faturamento) {
    var faturamentoTotal = Object.values(faturamento).reduce(function (total, valor) { return total + valor; }, 0);
    for (var estado in faturamento) {
        var valorEstado = faturamento[estado];
        var percentual = (valorEstado / faturamentoTotal) * 100;
        console.log("".concat(estado, ": ").concat(percentual.toFixed(2), "%"));
    }
}
calcularPercentuais(faturamentoPorEstado);
