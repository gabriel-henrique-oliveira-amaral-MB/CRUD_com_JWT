// Vamos precisar aplicar nossa middleware nas nossas rotas

// Vamos em usuário e importar abaixo de autenticado
// auth tem que vir antes de usuario

// const bodyParser = require('body-parser')
 
// const produto = require('./produtoRoute')
// const usuario = require('./usuariosRoute')
// const auth = require('./authRoute')

// module.exports = app => {
//   app.use(
//     bodyParser.json(),
//     produto,
//     auth,
//     usuario
//   )
// }

// Em autorization de get podemos colocar o token e os dados seram retornado

// Passaremos em header o Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFmY2E4MmZmLWQxYTctNGRkMC1hYTJmLTlkODZkZmY3NWNkNCIsImVtYWlsIjoiZ2FicmllbEBlbWFpbC5jb20iLCJpYXQiOjE2ODk0NTI2MjYsImV4cCI6MTY4OTUzOTAyNn0.JqnltQjPrg9idF6yF2u9DamYxC9ahrtl1GTNd5eZ3eo
// Na rota de buscar clientes