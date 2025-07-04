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
}

// Exporta a classe para uso em outros arquivos
module.exports = Calculator;