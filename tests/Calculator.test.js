// Importa a classe Calculator para os testes
const Calculator = require('../Calculator');

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

    // Testa se a soma lança erro para argumentos não numéricos
    test('deve lançar TypeError para entradas não numéricas na soma', () => {
        expect(() => calculator.sum('2', 3)).toThrow('Os argumentos devem ser números'); // Testa soma com string
        expect(() => calculator.sum(null, 3)).toThrow('Os argumentos devem ser números'); // Testa soma com null
    });

    // Testa a funcionalidade de subtração com diferentes casos
    test('deve subtrair dois números corretamente', () => {
        expect(calculator.subtract(5, 3)).toBe(2); // Testa subtração de números positivos
        expect(calculator.subtract(-1, -1)).toBe(0); // Testa subtração de números negativos
        expect(calculator.subtract(0, 5)).toBe(-5); // Testa subtração com resultado negativo
    });
});