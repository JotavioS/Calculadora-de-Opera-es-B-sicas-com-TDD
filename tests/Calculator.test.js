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

    // Testa se a subtração lança erro para argumentos não numéricos
    test('deve lançar TypeError para entradas não numéricas na subtração', () => {
        expect(() => calculator.subtract('5', 3)).toThrow('Os argumentos devem ser números'); // Testa subtração com string
        expect(() => calculator.subtract(5, null)).toThrow('Os argumentos devem ser números'); // Testa subtração com null
    });

    // Testa a funcionalidade de multiplicação com diferentes casos
    test('deve multiplicar dois números corretamente', () => {
        expect(calculator.multiply(2, 3)).toBe(6); // Testa multiplicação de números positivos
        expect(calculator.multiply(-2, 3)).toBe(-6); // Testa multiplicação com número negativo
        expect(calculator.multiply(0, 5)).toBe(0); // Testa multiplicação por zero
    });

    // Testa se a multiplicação lança erro para argumentos não numéricos
    test('deve lançar TypeError para entradas não numéricas na multiplicação', () => {
        expect(() => calculator.multiply('2', 3)).toThrow('Os argumentos devem ser números'); // Testa multiplicação com string
        expect(() => calculator.multiply(undefined, 3)).toThrow('Os argumentos devem ser números'); // Testa multiplicação com undefined
    });

    // Testa a funcionalidade de divisão com diferentes casos
    test('deve dividir dois números corretamente', () => {
        expect(calculator.divide(6, 2)).toBe(3); // Testa divisão de números positivos
        expect(calculator.divide(-6, 2)).toBe(-3); // Testa divisão com número negativo
        expect(calculator.divide(0, 5)).toBe(0); // Testa divisão de zero
    });

    // Testa se a divisão por zero lança a exceção esperada
    test('deve lançar erro ao dividir por zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Divisão por zero não é permitida');
    });

    // Testa se a divisão lança erro para argumentos não numéricos
    test('deve lançar TypeError para entradas não numéricas na divisão', () => {
        expect(() => calculator.divide('10', 2)).toThrow('Os argumentos devem ser números'); // Testa divisão com string
        expect(() => calculator.divide(10, '2')).toThrow('Os argumentos devem ser números'); // Testa divisão com string
    });
});