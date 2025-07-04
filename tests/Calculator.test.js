// Importa a classe Calculator para os testes
const Calculator = require('./Calculator');

// Descreve o conjunto de testes para a classe Calculator
describe('Calculator', () => {
  let calculator;

  // Inicializa uma nova instância da calculadora antes de cada teste
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Testa a funcionalidade de soma com diferentes casos
  test('deve somar dois números corretamente', () => {
    expect(calculator.sum(2, 3)).toBe(5); // Testa soma de números positivos
    expect(calculator.sum(-1, 1)).toBe(0); // Testa soma com número negativo
    expect(calculator.sum(0, 0)).toBe(0); // Testa soma de zeros
  });
});