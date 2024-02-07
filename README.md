
# Controle de Produtos

Um projeto desenvolvido com o intuito de colocar em prática meus conhecimento, atendendo necessidades de controle de produtos.


## Tecnologias

**Client:** React, CssModules

**Server:** Node, Express, JWTauth, MongoDB, PostgresSQL
<div style="display: inline_block"><br>
  <img align="center" height="40" width="50" src="https://cdn.worldvectorlogo.com/logos/react-1.svg">
  <img align="center" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" height="40" width="50" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" height="40" width="40" src="https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png">
  <img align="center" height="40" width="40" src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg">
  <img align="center" height="40" width="40" src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png">
  <img align="center" height="40" width="40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png">
</div>


## Variáveis de Ambiente

Para executar o server, é necessário a configuração das variaveis de ambiente, `.env`

`SUPABASE_URL`

`SUPABASE_KEY`

`JWT_SECRET`

`MONGODB_URI`

## Executando Localmente

Clone o projeto

```bash
  git clone https://github.com/hitalloazevedo/fullstack-app
```

Vá para o diretório

```bash
  cd fullstack-app
```

Iniciando o Servidor
```bash
  cd server
```
```bash
  npm install
```
```bash
  npm start
```

Iniciando o Client
```bash
  cd client
```
```bash
  npm install
```
```bash
  npm run start
```

## Observações
Para que o projeto seja executado sem problemas, é necessário configurar os bancos de dados de users e dos produtos.
### Produtos (Supabase)
Crie uma tabela "produtos" 
```
| cod       | description | size |
| :-------- | :---------- | :----|
|   int2    |     text    | text |
```
### Users (MongoDb)
Crie uma tabela "node-auth" com uma collection "users".
Configure a variável de ambiente `MONGODB_URI` com a string de conexão.



## Screenshots

![App Screenshot](https://i.pinimg.com/736x/db/ce/27/dbce27bfe58eb71066d413dd3d25fe01.jpg)
![App Screenshot](https://i.pinimg.com/736x/c0/a4/6a/c0a46a781a9135d460ce217c49ff142a.jpg)
![App Screenshot](https://i.pinimg.com/736x/52/54/53/52545342ff644ad2b0ba62e68b44ea4a.jpg)
![App Screenshot](https://i.pinimg.com/736x/21/1d/01/211d01ee0dc789bf9210a979aaf252e1.jpg)
![App Screenshot](https://i.pinimg.com/736x/08/8e/59/088e594507aefad9434801ab00c55bc4.jpg)


## Authors

- [@Hitallo Azevedo](https://www.github.com/hitalloazevedo)

