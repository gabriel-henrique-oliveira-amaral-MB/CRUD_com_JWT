const { verify, decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    // Vamos utilizar o return para evitar qualquer cache de token
    if (!token) {
       return res.status(401).send('Access token não informado')
    }
    // Vamos pegar o segundo elemento do array usando o separador de espaço
    const [, accessToken] = token.split(" ")

    try {
        // verify verifica se nossa função possui nosso secret caso possua vai retornar para a gente uma parte válida caso não, cai em uma exceçao
        verify(accessToken, jsonSecret.secret)

        // Importar uma função chamada decode que vai pegar nosso token e vai traduzir todas as informações que vamos precisar dele
        // As informações são o id e o email do usuário
        const { id, email } = await decode(accessToken)
        req.usuarioId = id
        req.usuarioEmail = email
        return next()

    } catch (error) {
        res.status(401).send('Usuario não autenticado')
    }
}