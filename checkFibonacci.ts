import * as readline from "readline";

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(number: number): boolean {
  let a = 0,
    b = 1;

  // Caso o número seja 0 ou 1, ele pertence à sequência
  if (number === 0 || number === 1) {
    return true;
  }

  // Gera a sequência de Fibonacci até que o valor seja igual ou maior ao número fornecido
  while (b < number) {
    [a, b] = [b, a + b]; // Atualiza os dois últimos números
  }

  // Retorna true se o número for igual ao último número da sequência gerado
  return b === number;
}

// Função principal para capturar entrada e exibir o resultado
function checkFibonacci(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Solicita um número ao usuário
  rl.question(
    "Digite um número para verificar se pertence à sequência de Fibonacci: ",
    (input) => {
      const userInput = parseInt(input);

      // Valida se o input é um número
      if (isNaN(userInput)) {
        console.log("Por favor, insira um número válido.");
      } else {
        // Chama a função isFibonacci e exibe o resultado
        if (isFibonacci(userInput)) {
          console.log(
            `O número ${userInput} pertence à sequência de Fibonacci.`
          );
        } else {
          console.log(
            `O número ${userInput} não pertence à sequência de Fibonacci.`
          );
        }
      }

      rl.close(); // Fecha a interface readline
    }
  );
}

// Chamada da função principal
checkFibonacci();
