function calcularSoma(): number {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return SOMA;
}

console.log(
  `O valor da variável SOMA ao final do processamento é: ${calcularSoma()}`
);