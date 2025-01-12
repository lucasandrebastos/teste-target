const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularPercentuais(faturamento: { [estado: string]: number }) {
  const faturamentoTotal = Object.values(faturamento).reduce(
    (total, valor) => total + valor,
    0
  );

  for (const estado in faturamento) {
    const valorEstado = faturamento[estado];
    const percentual = (valorEstado / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}

calcularPercentuais(faturamentoPorEstado);
