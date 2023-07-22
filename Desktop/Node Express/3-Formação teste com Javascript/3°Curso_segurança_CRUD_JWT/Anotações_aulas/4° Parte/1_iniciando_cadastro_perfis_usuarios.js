// Precisamos cadastrar o perfil dos nosssos usuários
// Dentro da nossa pasta routes criar um novo arquivo de rotas
// Criaremos o arquivo seguranca.js em routes
// Depois criaremos segurancaController
// Vamos também importar o arquivo de controller em routes
// Criaremos também um novo arquivo chamado segurancaService
// Vamos configurar nosso função cadastrar acl em controllers e services
// Service

// const database = require('../models')

// class SegurancaService {
//     async cadastrarAcl(dto) {
//         const usuario = await database.usuarios.findOne({
//             include: [{
//                 model: database.roles,
//                 as: 'usuario_roles',
//                 attributes: ['id', 'nome', 'descricao']
//             },
//             {
//                 model: database.permissoes,
//                 as: 'usuario_permissoes',
//                 attributes: ['id', 'nome', 'descricao']
//              }],
//             where: {
//                 id: dto.usuarioId
//             }
//         })
//     }
// }

// module.exports = SegurancaService