const dados = require("./dados.json");

function calcularFaturamento(dados: { dia: number; valor: number }[]) {
  // Filtra apenas os dias com faturamento > 0
  const diasComFaturamento = dados.filter((dado) => dado.valor > 0);

  // Calcula o menor e maior valor de faturamento
  const menorFaturamento = Math.min(
    ...diasComFaturamento.map((dado) => dado.valor)
  );
  const maiorFaturamento = Math.max(
    ...diasComFaturamento.map((dado) => dado.valor)
  );

  // Calcula a média mensal de faturamento (ignora dias sem faturamento)
  const somaFaturamento = diasComFaturamento.reduce(
    (total, dado) => total + dado.valor,
    0
  );
  const mediaMensal = somaFaturamento / diasComFaturamento.length;

  // Calcula o número de dias com faturamento acima da média
  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dado) => dado.valor > mediaMensal
  ).length;

  // Retorna os resultados
  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

// Chamada da função
const resultado = calcularFaturamento(dados);

// Exibe os resultados no console
console.log(
  `Menor valor de faturamento ocorrido em um dia do mês: ${resultado.menorFaturamento.toFixed(
    2
  )}`
);
console.log(
  `Maior valor de faturamento ocorrido em um dia do mês: ${resultado.maiorFaturamento.toFixed(
    2
  )}`
);
console.log(
  `Número de dias no mês com faturamento superior à média mensal: ${resultado.diasAcimaDaMedia}`
);
