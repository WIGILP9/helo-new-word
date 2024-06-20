// Declaração da variável nome e atribuição do valor "João"
let nome = "João";

// Exibindo o valor da variável no console
console.log(nome);
// Declaração das variáveis a e b e atribuição dos valores
let a = 5;
let b = 10;

// Calculando a soma de a e b
let soma = a + b;

// Exibindo o resultado da soma no console
console.log("A soma de a e b é:", soma);
// Declaração das variáveis primeiroNome e ultimoNome e atribuição dos valores
let primeiroNome = "Josefa";
let ultimoNome = "Silva";

// Concatenando os dois textos para formar o nome completo
let nomeCompleto = primeiroNome + " " + ultimoNome;

// Exibindo o nome completo no console
console.log("Nome completo:", nomeCompleto);
// Declaração da variável pessoa como um objeto com suas propriedades
let pessoa = {
    nome: "Maria",
    idade: 30,
    endereco: "Rua ABC, 123",
    telefone: "(11) 98765-4321"
};

// Exibindo todos os valores da variável pessoa no console
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Endereço:", pessoa.endereco);
console.log("Telefone:", pessoa.telefone);
// Declaração do vetor numeros com os valores fornecidos
let numeros = [1, 2, 3, 4, 5];

// Exibindo o primeiro e o último elemento do vetor
console.log("Primeiro elemento:", numeros[0]);
console.log("Último elemento:", numeros[numeros.length - 1]);
let idade = 20; // Exemplo de idade, pode ser alterada para testes

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
let nota = 6; // Exemplo de nota, pode ser alterada para testes

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota > 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
let diaDaSemana = 3; // Exemplo de dia da semana, pode ser alterado para testes
let nomeDoDia;

switch (diaDaSemana) {
    case 1:
        nomeDoDia = "Domingo";
        break;
    case 2:
        nomeDoDia = "Segunda-feira";
        break;
    case 3:
        nomeDoDia = "Terça-feira";
        break;
    case 4:
        nomeDoDia = "Quarta-feira";
        break;
    case 5:
        nomeDoDia = "Quinta-feira";
        break;
    case 6:
        nomeDoDia = "Sexta-feira";
        break;
    case 7:
        nomeDoDia = "Sábado";
        break;
    default:
        nomeDoDia = "Dia inválido";
}

console.log("Dia da semana:", nomeDoDia);
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
let numero = 0;

do {
    console.log(numero);
    numero++;
} while (numero < 3);

let valores = [10, 20, 30, 40, 50];

for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
}

console.log("A soma dos elementos do vetor é:", soma);
let number = [15, 30, 7, 42, 19]; // Exemplo de vetor, pode ser alterado para testes
let maximo = number[0];

for (let i = 1; i < number.length; i++) {
    if (number[i] > maximo) {
        maximo = number[i];
    }
}

console.log("O maior número no vetor é:", maximo);
numero = [15, 30, 7, 42, 19]; // Exemplo de vetor, pode ser alterado para testes
let minimo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
        minimo = numeros[i];
    }
}

console.log("O menor número no vetor é:", minimo);
let n = 5; // Exemplo de número para calcular o fatorial, pode ser alterado para testes
let fatorial = 1;

for (let i = 1; i <= n; i++) {
    fatorial *= i;
}

console.log("O fatorial de", n, "é:", fatorial);
 numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i], "é par");
    } else {
        console.log(numeros[i], "é ímpar");
    }
}
let texto = "Hello World"; // Exemplo de texto, pode ser alterado para testes
let vogais = 0;

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase(); // Considera tanto vogais maiúsculas quanto minúsculas
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        vogais++;
    }
}

console.log("O texto possui", vogais, "vogais.");
 texto = "JavaScript"; // Exemplo de texto, pode ser alterado para testes
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log("Texto invertido:", textoInvertido);
let inicio = 10;
let fim = 30;
let primosEncontrados = [];

for (let numero = inicio; numero <= fim; numero++) {
    let ehPrimo = true;

    // Verifica se o número é primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    // Se for primo, adiciona ao array de primosEncontrados
    if (ehPrimo && numero > 1) {
        primosEncontrados.push(numero);
    }
}

console.log("Números primos entre", inicio, "e", fim, "são:", primosEncontrados);
