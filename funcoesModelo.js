function retornarEspelho(numero) {
    return parseInt(numero.toString().split('').reverse().join(''), 10);
}

function retornarSegundoMaiorValor(vetor) {
    const vetorSemDuplicatas = [...new Set(vetor)];
    const segundoMaiorValor = vetorSemDuplicatas.sort((a, b) => { return a - b }).reverse()[1];
    return segundoMaiorValor !== vetorSemDuplicatas[0] && vetorSemDuplicatas.length > 1 ? segundoMaiorValor : 'erro';
}

function multiplicarMatrizes(matriz_1, matriz_2) {
    let resultado = [];
    const m_2 = matriz_2[0].length;
    const m_1 = matriz_1.length;
    const itens = matriz_1[0].length;
    if (itens !== matriz_2.length) return null;
    else {
        for (let i = 0; i < m_1; i++) {
            resultado.push([]);
            for (let j = 0; j < m_2; j++) {
                resultado[i].push(0);
                for (let k = 0; k < itens; k++) {
                    resultado[i][j] += matriz_1[i][k] * matriz_2[k][j];
                }
            }
        }
        return resultado;
    }
}

module.exports = { retornarEspelho, multiplicarMatrizes, retornarSegundoMaiorValor };