const divisao = function (a, b) {
    if (b === 0) {
        return "Impossível dividir por zero";
    }
    return a / b;
}

module.exports = divisao;