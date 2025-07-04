// Classe que implementa uma calculadora com operações básicas
class Calculator {
    // Método privado para validar se os argumentos são números
    #validateInputs(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Os argumentos devem ser números');
        }
    }

    // Soma dois números e retorna o resultado
    sum(a, b) {
        this.#validateInputs(a, b); // Valida os tipos dos argumentos
        return a + b;
    }

    // Subtrai o segundo número do primeiro e retorna o resultado
    subtract(a, b) {
        this.#validateInputs(a, b); // Valida os tipos dos argumentos
        return a - b; // Retorna a subtração de a por b
    }

    // Multiplica dois números e retorna o resultado
    multiply(a, b) {
        this.#validateInputs(a, b); // Valida os tipos dos argumentos
        return a * b; // Retorna o produto de a e b
    }

    // Divide o primeiro número pelo segundo e retorna o resultado
    divide(a, b) {
        this.#validateInputs(a, b); // Valida os tipos dos argumentos
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida');
        }
        return a / b; // Retorna o resultado da divisão
    }
}

// Exporta a classe para uso em outros arquivos
module.exports = Calculator;