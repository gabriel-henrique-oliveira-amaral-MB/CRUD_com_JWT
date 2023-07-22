// Com git rebase indicando a branch alvo podemos trazer os commits
// Teremos varios usuários e cada um terá um papel com permissões diferentes
// Vamos criar a parte de perfis de usuário
// Usando o terminal vamos digitar npx sequelize model:create --name roles --attributes nome:string,descricao:string

// Vamos no arquivo de migration e alterar também'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//     async up(queryInterface, Sequelize) {
//       await queryInterface.createTable('roles', {
//         id: {
//           allowNull: false,
//           primaryKey: true,
//           type: Sequelize.UUID,
//           defaultValue: Sequelize.UUID
//         },
//         nome: {
//           type: Sequelize.STRING
//         },
//         descricao: {
//           type: Sequelize.STRING
//         },
//         createdAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         },
//         updatedAt: {
//           allowNull: false,
//           type: Sequelize.DATE
//         }
//       });
//     },
//     async down(queryInterface, Sequelize) {
//       await queryInterface.dropTable('roles');
//     }
//   };

// npm start
// e verificar se não tem erro
// podemos começar a parte de criação do crud
// Primeiramente podemos criar o arquivo de role no routes

// Depois de criar os cruds da rota podemos ir no arquivo de index para usar a rota

// index da pasta routes


// const bodyParser = require('body-parser')
 
// const produto = require('./produtoRoute')
// const usuario = require('./usuariosRoute')
// const auth = require('./authRoute')
// const role = require('./rolesRoute')

// module.exports = app => {
//   app.use(
//     bodyParser.json(),
//     auth,
//     usuario,
//     produto,
//     role
//   )
// }

// Agora que criamos nossa rotas podemos criar nosso arquivo de controller roleController
// Agora podemos criar um arquivo de service que será usado também roleService
// Agora podemos importar nosso seviçe na controller

// Primeiro o model(migrations) é criado depois o routes depois controller depois service
// controller importa de service

// Com a parte de cadastro em controller precisamos criar a outra parte em services
// const RoleService = require('../services/roleService')
// const roleService = new RoleService()

// class RoleController {
//     static async cadastrar(req, res){
//         const { nome, descricao} = req.body

//         try {
//             const role = roleService.cadastrar({ nome, descricao })
//             res.status(201).send(role)
//         } catch(error) {
//             res.status(400).send(error.message)
//         }
//     }
// }

// module.exports = RoleController

// Criaremos agora o service de role

// const database = require('../models')
// const uuid = require('uuid')

// class roleService {
//     async cadastrar(dto) {
//         const role = database.roles.findOne({
//             where: {
//                 nome: dto.nome
//             }
//         })

//         if (role) {
//             throw new Error('Role já cadastrada')
//         }

//         try {
//             const newRole = database.roles.create({ 
//                 id: uuid.v4(),
//                 nome: dto.nome,
//                 descricao: dto.descricao
//              })

//              return newRole
//         } catch (error) {
//             throw new Error('Erro ao cadastrar role')
//         }

//     }
// }

// module.exports = roleService
