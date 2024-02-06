
# Controle de Produtos

Um projeto desenvolvido com o intuito de colocar em prática meus conhecimento, atendendo necessidades de controle de produtos.


## Tecnologias

**Client:** React, CssModules

**Server:** Node, Express, JWTauth, MongoDB, PostgresSQL


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

