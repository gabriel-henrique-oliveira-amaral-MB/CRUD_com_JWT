// Vamos criar agora o usuário e criar o controller de usuários
// Importante criarmos também uma services de usuários

// Vamos importar os métodos de services no controlador de usuário
// Vamos passar para a função cadastrar o parâmetro dto 


// usuarioService
// const database = require('../models')

// class UsuarioService {
//     async cadastrar(dto) {
//         const usuario = await database.usuarios.findOne({  
//             where: {
//                 email: dto.email
//             }
//           })
//           // Vamos passar um if para evitar que o usuário tenha o cadastro duplicado
//           if (usuario) {
//                 throw new Error('Usuário já cadastrado')
//           }
//     }
// }

// module.exports = UsuarioService;

// usuarioController
// const UsuarioService = require('../services/usuarioService')
// const usuarioService = new UsuarioService()

// class UsuarioController {
//    static async cadastrar(req, res){
//        const { nome, email, senha } = req.body

//        try {
//             const usuario = await usuarioService.cadastrar({ nome, email, senha })
//             // Esse status significa created
//             res.status(201).send(usuario)
//        } catch(error) {
//             res.status(400).send({ message: error.message })
//        }
//     }
// }

// module.exports = UsuarioController