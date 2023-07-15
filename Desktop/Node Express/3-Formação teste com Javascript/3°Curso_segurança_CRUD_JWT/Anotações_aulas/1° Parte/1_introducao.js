// Para começar vamos baixar o projeto da aplicação

// Vamos dar início ao cadastro de usuários
// Para isso vamos digitar o comando
// npx sequelize model:create --name usuarios --attributes nome:string,email:string,senha:string

// Uma fragilidade que pode ter na nossa aplicação é usar id do tipo inteiro então devemos modificar para UUID, remover o autoincrement e definir um defaulValue para nossa tabela

// id: {
//     primaryKey: true,
//     allowNull: false,
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV4
//   },

// Em usuários temos que ajustar para que não retorne a senha, pois é uma má prática, vamos definir um defaultScope

// usuarios.init({
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

// Assim garantimos mais segurança para nossos usuários

// Agora é importante que criemos uma rota para nosso usuário