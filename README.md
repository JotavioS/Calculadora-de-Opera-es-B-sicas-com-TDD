# Calculadora com TDD e Git

Este projeto implementa uma calculadora simples em JavaScript utilizando Test-Driven Development (TDD) com Jest. Cada etapa do ciclo TDD (Red, Green, Refactor) foi documentada com commits no Git para demonstrar o processo.

## Estrutura do Projeto
- `Calculator.js`: Contém a classe `Calculator` com métodos para operações básicas: `sum`, `subtract`, `multiply` e `divide`.
- `Calculator.test.js`: Contém os testes automatizados para validar o comportamento da calculadora.
- `.gitignore`: Ignora arquivos desnecessários como `node_modules`.
- `package.json`: Configura o projeto Node.js com Jest.
- `README.md`: Este arquivo, com instruções de configuração e execução.

## Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (geralmente incluído com o Node.js)
- Git

## Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/JotavioS/calculadora-tdd.git
   cd calculadora-tdd
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npm test
   ```

## Funcionalidades
A classe `Calculator` suporta as seguintes operações:
- `sum(a, b)`: Soma dois números.
- `subtract(a, b)`: Subtrai o segundo número do primeiro.
- `multiply(a, b)`: Multiplica dois números.
- `divide(a, b)`: Divide o primeiro número pelo segundo, lançando uma exceção para divisão por zero.

Todos os métodos validam se os argumentos são números, lançando um `TypeError` caso contrário.

## Histórico de Commits
O repositório foi estruturado para refletir o ciclo TDD:
1. **Red**: Testes iniciais que falham (ex.: "Adiciona teste inicial para o método sum (Red)").
2. **Green**: Implementação mínima para passar nos testes (ex.: "Implementa método sum para passar nos testes (Green)").
3. **Refactor**: Melhorias no código com validação de tipos (ex.: "Refatora método sum com validação de tipos (Refactor)").

Para visualizar o histórico de commits:
```bash
git log --oneline
```

## Exemplo de Uso
```javascript
const Calculator = require('./Calculator');
const calc = new Calculator();

console.log(calc.sum(2, 3)); // 5
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(2, 3)); // 6
console.log(calc.divide(6, 2)); // 3
```

## Notas
- Cada método foi desenvolvido seguindo o ciclo TDD, com commits separados para cada etapa.
- O histórico de commits no Git comprova a adesão ao processo TDD.