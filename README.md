<h1 align="center">
<br>
  <img src="https://i.ibb.co/GQB2cZs/gympoint.png" alt="gympoint" border="0">
<br>
<br>
Fullstack Project Gympoint
</h1>

# Desafio final Bootcamp GoStack9

Código referente à entrega do desafio final do Bootcamp GoStack 9.


## Tecnologias

Para o desenvolvimento da aplicação foi utilizada a stack: Node.JS, ReactJS e React Native para o backend, front-end e mobile(android) respectivamente.

### BACK-END
-   [Node.js][nodejs]
-   [Express](https://expressjs.com/)
-   [nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Docker](https://www.docker.com/docker-community)
-   [Sequelize](http://docs.sequelizejs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [node-postgres](https://www.npmjs.com/package/pg)
-   [Redis](https://redis.io/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://jwt.io/)
-   [Multer](https://github.com/expressjs/multer)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Bee Queue](https://www.npmjs.com/package/bcrypt)
-   [Nodemailer](https://nodemailer.com/about/)
-   [date-fns](https://date-fns.org/)


### FRONT-END
-   [ReactJS](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [History](https://www.npmjs.com/package/history)
-   [Immer](https://github.com/immerjs/immer)
-   [React-Toastify](https://fkhadra.github.io/react-toastify/)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)


## Demonstration

<h1 align="center">
  <img src="https://i.ibb.co/RB85dC7/gympoint-Web.gif" alt="gympoint-Web" border="0">
</h1>


### MOBILE
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)


## Demonstration

<div align="center">
  <img src="https://i.ibb.co/vzSCpMf/gympoint-Mobile.gif" width="300" alt="gympoint-Mobile" border="0">
</div>


## Plataforma do aplicativo

Por não ter acesso à um MAC, o código mobile foi desenvolvido para Android e testado apenas nessa plataforma.

**OBS:** No código mobile é necessário trocar o IP presente nos arquivos, devido ter feito os testes usando USB, de acordo com a aula do Bootcamp, estão no arquivo /services/api.js e /config/ReactotronConfig.js


## Instalação

Postgres - Banco de dados principal
Eu usei direto sem ter dar start no Docker, mesmo assim deixo aqui o comando para quem for usar com Docker.  
`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

Redis - Banco de dados para filas  
`docker run --name redis -p 6379:6379 -d -t redis:alpine`

Sequelize  
`yarn sequelize db:migrate`  

## **Backend**
Instalação do node_modules
`yarn`

`yarn dev`

`yarn queue`

## **Frontend**
Instalação do node_modules
`yarn`

`yarn start`

## **Mobile(android)**
Instalação do node_modules
`yarn`

Para iniciar o Bundle
`yarn start`

Para rodar a aplicação
`yarn dev`


## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
