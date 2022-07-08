const funcoes = require('./funcoesModelo');
const multiplicarMatrizes = funcoes.multiplicarMatrizes;

describe('Desafio 03', () => {
    test('Deve retornar a  multiplicação de duas matrizes', () => {
        const matriz_1 = [[4], [5]];
        const matriz_2 = [[2, 3]];
        const resposta_1 = JSON.stringify(multiplicarMatrizes(matriz_1, matriz_2))
        expect(resposta_1).toBe(JSON.stringify([[8, 12], [10, 15]]));
        const matriz_3 = [[3, 1], [2, -1], [0, 4]];
        const matriz_4 = [[1, -1, 2], [3, 0, 5]];
        const resposta_2 = JSON.stringify(multiplicarMatrizes(matriz_3, matriz_4));
        expect(resposta_2).toBe(JSON.stringify([[6, -3, 11], [-1, -2, -1], [12, 0, 20]]));
    })
    test('Caso haja incompatibilidade de tamanho, deve retornar "null" ', () => {
        const matriz_1 = [[4], [5]];
        const matriz_2 = [[2, 3, 6], [4, 8, 0]];
        const resposta_1 = multiplicarMatrizes(matriz_1, matriz_2);
        expect(resposta_1).toBe(null);
        const matriz_3 = [[3, 1], [2, -1], [0, 4]];
        const matriz_4 = [[1, -1, 2], [3, 0, 5], [5, 4, 9]];
        const resposta_2 = multiplicarMatrizes(matriz_3, matriz_4);
        expect(resposta_2).toBe(null);
    })
    test('Verifica se a multiplicação de uma matriz por sua inversa resulta na matriz identidade', () => {
        const matriz_1 = [[2, 1], [5, 3]];
        const matriz_2 = [[3, -1], [-5, 2]];
        const resposta_1 = JSON.stringify(multiplicarMatrizes(matriz_1, matriz_2));
        expect(resposta_1).toBe(JSON.stringify([[1, 0], [0, 1]]));
        const matriz_3 = [[1, 2, 3], [0, 1, 4], [0, 0, 1]];
        const matriz_4 = [[1, -2, 5], [0, 1, -4], [0, 0, 1]];
        const resposta_2 = JSON.stringify(multiplicarMatrizes(matriz_3, matriz_4));
        expect(resposta_2).toBe(JSON.stringify([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
    })
})