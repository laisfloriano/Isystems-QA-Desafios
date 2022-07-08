const funcoes = require('./funcoesModelo');
const retornarEspelho = funcoes.retornarEspelho;

describe('Desafio 01', () => {
    test('Deve retornar o espelho de um número', () => {
        const numero = 8959;
        const resposta = retornarEspelho(numero);
        expect(resposta).toBe(9598);
        const numero2 = 5542326;
        const resposta2 = retornarEspelho(numero2);
        expect(resposta2).toBe(6232455);
    })
    test('Deve ignorar a parte decimal', () => {
        const numero = 1000;
        const resposta = retornarEspelho(numero);
        expect(resposta).toBe(1);
        const numero2 = 9877000;
        const resposta2 = retornarEspelho(numero2);
        expect(resposta2).toBe(7789);
    })
})