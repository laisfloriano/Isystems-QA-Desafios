const funcoes = require('./funcoesModelo');
const retornarSegundoMaiorValor = funcoes.retornarSegundoMaiorValor;

describe('Desafio 02', () => {
    test('Deve retornar o segundo maior número de um vetor', () => {
        const numero_1 = [1, 2, 3, 4];
        const resposta_1 = retornarSegundoMaiorValor(numero_1);
        expect(resposta_1).toBe(3);
        const numero_2 = [1, 2, 3, 4, 5, 5];
        const resposta_2 = retornarSegundoMaiorValor(numero_2);
        expect(resposta_2).toBe(4);
        const numero_3 = [1, 2];
        const resposta_3 = retornarSegundoMaiorValor(numero_3);
        expect(resposta_3).toBe(1);
    })
    test('Deve retornar uma mensagem de "erro"', () => {
        const numero_1 = [1, 1];
        const resposta_1 = retornarSegundoMaiorValor(numero_1);
        expect(resposta_1).toBe('erro');
        const numero_2 = [2];
        const resposta_2 = retornarSegundoMaiorValor(numero_2);
        expect(resposta_2).toBe('erro');
    })
})