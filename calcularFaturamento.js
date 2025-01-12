var dados = require("./dados.json");
function calcularFaturamento(dados) {
    var diasComFaturamento = dados.filter(function (dado) { return dado.valor > 0; });
    var menorFaturamento = Math.min.apply(Math, diasComFaturamento.map(function (dado) { return dado.valor; }));
    var maiorFaturamento = Math.max.apply(Math, diasComFaturamento.map(function (dado) { return dado.valor; }));
    var somaFaturamento = diasComFaturamento.reduce(function (total, dado) { return total + dado.valor; }, 0);
    var mediaMensal = somaFaturamento / diasComFaturamento.length;
    var diasAcimaDaMedia = diasComFaturamento.filter(function (dado) { return dado.valor > mediaMensal; }).length;
    return {
        menorFaturamento: menorFaturamento,
        maiorFaturamento: maiorFaturamento,
        diasAcimaDaMedia: diasAcimaDaMedia,
    };
}
var resultado = calcularFaturamento(dados);
console.log("Menor valor de faturamento ocorrido em um dia do m\u00EAs: ".concat(resultado.menorFaturamento.toFixed(2)));
console.log("Maior valor de faturamento ocorrido em um dia do m\u00EAs: ".concat(resultado.maiorFaturamento.toFixed(2)));
console.log("N\u00FAmero de dias no m\u00EAs com faturamento superior \u00E0 m\u00E9dia mensal: ".concat(resultado.diasAcimaDaMedia));
