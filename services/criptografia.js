const DADOS_CRIPTOGRAFAR = {
	algoritmo: "aes256",
	segredo: "glayson",
	codificacao: "utf8",
	tipo: "hex"
};

const criptografador = {};
const crypto = require("crypto");
const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);

criptografador.cipher = cipher;

criptografador.criptografar = function criptografar(senha) {
	const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
	cipher.update(senha, DADOS_CRIPTOGRAFAR.codificacao);
	return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

criptografador.descriptografar = function descriptografar(senha) {
	const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
	decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo, DADOS_CRIPTOGRAFAR.codificacao);
	return decipher.final(DADOS_CRIPTOGRAFAR.codificacao);
};

module.exports = criptografador;