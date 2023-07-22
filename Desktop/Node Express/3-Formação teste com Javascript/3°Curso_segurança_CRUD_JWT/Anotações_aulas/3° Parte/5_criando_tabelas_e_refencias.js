// Vamos relacionar as tabelas 
// Vamos precisar usar tabelas pivo para ligações das demais tabelas
// Criando uma nova tabela para isso
// npx sequelize-cli model:create --name usuarios_roles --attributes usuario_id:uuid,role_id:uuid
// Criaremos outra tabela também que armazenará as permissões do usuário
// npx sequelize model:create --name usuarios_permissoes --attributes usuario_id:uuid,permissao_Id:uuid
// Por ultimo vamos criar a ultima tabela de relacionamento
// npx sequelize model:create --name roles_permissoes --attributes role_id:uuid,permissao_id:uuid
// Conforme podemos ver no migrations foram criados três novos arquivos
// Em migrations de usuarios_roles vamos alterar os campos da tabela fazendo as respectivas referência

// Vamos fazer a referência nas tabelas e utilizar o CASCADE no delete e update que indicam caso um registro da tabela "principal" seja apagado os demais registros re-
// lacionados a ele nas tabelas pivos também serão

// 'use strict';
// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('usuarios_roles', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       usuario_id: {
//         type: Sequelize.UUID,
//         references: {
//           model: 'usuarios',
//           key: 'id'
//         },
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//       },
//       role_id: {
//         type: Sequelize.UUID,
//         references: {
//           model: 'roles',
//           key: 'id'
//         },
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('usuarios_roles');
//   }
// };