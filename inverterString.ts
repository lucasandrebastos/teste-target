function inverterString(str: string): string {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

const strDto = "socorram-me, subi no ônibus em marrocos";
const strDto2 = "Lucas";
const strDto3 = "Minha vaga na target";
const strDto4 = "A arara voou ontem para a casa de são sebastião";

console.log("Original:", strDto);
console.log("Invertida:", inverterString(strDto));
console.log("Original:", strDto2);
console.log("Invertida:", inverterString(strDto2));
console.log("Original:", strDto3);
console.log("Invertida:", inverterString(strDto3));
console.log("Original:", strDto4);
console.log("Invertida:", inverterString(strDto4));
