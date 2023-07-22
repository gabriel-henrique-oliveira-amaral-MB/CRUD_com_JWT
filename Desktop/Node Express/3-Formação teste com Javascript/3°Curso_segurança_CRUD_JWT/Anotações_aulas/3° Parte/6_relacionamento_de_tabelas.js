// Agora que já temos a parte das referêcias criadas precisaremos fazer o relacionamento
// Temos relacionamento many to many
// Relacionamento é criado dentro da própria tabela mesmo
// No model do usuário podemos associar a tabela de usuario com belongToMany(many to many)
// dentro do many to many precisamos fazer a referêcia da tabela pivô por meio de um objeto
// podemos definir também um apelido para o nosso relacionamenro na tabela

// É necessário a partir fazer os relacionamentos das tabelas 
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class usuarios extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       usuarios.belongsToMany(models.roles, {
//         through: models.usuarios_roles,
//         as: 'usuarios_roles',
//         foreignKey: 'usuario_id'
//       })
//       usuarios.belongsToMany(models.permissoes, {
//         through: models.usuarios_permissoes,
//         as: 'usuarios_permissoes',
//         foreignKey: 'usuario_id'
//       })
//     }
//   }
//   usuarios.init({
//     nome: DataTypes.STRING,
//     email: DataTypes.STRING,
//     senha: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'usuarios',
//     defaultScope: {
//       attributes: {
//         exclude: ['senha']
//       }
//     }
//   });
//   return usuarios;
// };

// Sendo   through: models.usuarios_roles, // tabela pivo
//         as: 'usuarios_roles', // nome relacionamento
//         foreignKey: 'usuario_id' // chave estrangeira

// Precisamos criar um db migrate para rodar as tabelas

// npx sequelize-cli db:migrate
// Vamos rodar npm run start para verificar se está ok

// Precisamos alterar o apelido dos relacionamentos para não terem os mesmos nomes das tabelas
// Dica é refazer nosso projeto para garantir que não subiram dados errados para o banco
// Vamos dar npx sequelize db:migrate:undo três vezes
// Agora podemos fazer nossa migração e rodar nosso projeo