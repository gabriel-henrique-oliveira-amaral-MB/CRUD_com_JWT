// Dando continuidade, fizemos a validação do usuário e agora sabendo se o usuário é válido ou não vamos poder iniciar a parte de autentificação do nosso usuário

// Em autService vamos usar o método compare do bcyript

// const database = require('../models')
// const { compare } = require('bcryptjs')

// class AuthService {
//     async login(dto) {
//         const usuario = await database.usuarios.findOne({
//             attributes: ['id', 'email', 'senha'],
//             where: {
//                 email: dto.email
//             }
//         })

//         if(!usuario) {
//             throw new Error('Usuario não cadastrado')
//         }

//         const senhasIguais = compare(dto.senha, usuario.senha)

//         if (!senhasIguais) {
//             throw new Error('Usuario ou senha inválido')
//         }

//     }
// }

// module.exports = AuthService

// Após fazer a comparação precisamos baixar a biblioteca jsonwebtoken
// npm install jsonwebtoken

// Agora vamos importar a função sign 
// Criar uma função accessToken 
// Função sign tem  campos o primeiro é o payload, contem o payload que iremos passar para o nosso usuário o segundo é o secret é o código único que vai ter no nosso projeto
// e a ultima opção é o option que podemos passar quanto tempo vai expirar entre outros
// No secret podemos usar um site MD5 para geração de hash
// Dentro de config podemos criar um novo arquivo onde ficará salvo nossa secret
// jsonSecret.js

// module.exports = {
//     secret: "c61b38eb73e0a5e5631a7562a46a3c10"
// }

// Depois de termos o arquivo criado podemos exportá-lo

// const database = require('../models')
// const { compare } = require('bcryptjs')
// const { sign } = require('jsonwebtoken')
// const jsonSecret = require('../config/jsonSecret')

// class AuthService {
//     async login(dto) {
//         const usuario = await database.usuarios.findOne({
//             attributes: ['id', 'email', 'senha'],
//             where: {
//                 email: dto.email
//             }
//         })

//         if(!usuario) {
//             throw new Error('Usuario não cadastrado')
//         }

//         const senhasIguais = compare(dto.senha, usuario.senha)

//         if (!senhasIguais) {
//             throw new Error('Usuario ou senha inválido')
//         }

//         const accessToken = sign({ 
//             id: usuario.id,
//             email: usuario.email
//          }, jsonSecret.secret, {
//             expiresIn: 86400
//          })

//          return { accessToken }

//     }
// }

// module.exports = AuthService

// Exportamos o token que se expira em um dia
// E vamos importar o auth controller de routes

// Próximo passo consite em rodar o projeto e realizar testes