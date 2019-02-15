# Ufscar NodeJS

Projeto de uma API em NODEJS para avaliação da materia Web - EES - UFSCAR. Basicamente, podemos cadastrar colecionadores de filmes e quais filmes contém na sua coleção particular.

## Tecnologias utilizadas
* [NodeJS] (https://nodejs.org/en/)
* [Fastify] (https://www.fastify.io/)
* [Microsoft SQL Server Client] (https://www.npmjs.com/package/mssql)
* [JWT] (https://jwt.io/)
* [API TheMovieDB] (https://api.themoviedb.org)

## Configurações padrões
  A porta da API esta fixa (3000). (Para alterar acessar arquivo Server.js)
  
  As configurações do banco de dados:
        user: 'sa',
        password: 'ABC123teste',
        server: 'localhost', 
        database: 'ufscar'
	
	
  (Para alterar acessar arquivos collectorRepository.js e userRepository.js - na pasta Repository)
  
  ### OBS:
  	Por se tratar de uma aplicação simples e de exemplo, não disponibilizamos arquivos de configurações.
  
## EndPoints
  Criar um usuário: 

    POST localhost:3000/user/create
    
    Exemplo JSON:
    
    {
    "login" : "dmonco3",
    "name" : "Danilo Monco",
    "email" : "programmer.dm@gmail.com",
    "password" : "senha"
    }
  
  
  Autenticar usuário existente:
  
    POST localhost:3000/user/auth
    
    Exemplo JSON:
    {
    "login" : "dmonco3",
    "password" : "senha"
    }
    
    
  Pesquisar filmes:
  
    GET localhost:3000/movie/search/**minions**
    
      onde **minions** é o nome do filme a ser pesquisa
    
    Necessário enviar token de autenticação no header, exemplo:
    
    Authorization
    
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTAxOTQ4MDIsImlhdCI6MTU1MDE5NDUwMn0.QLQWEj4Qeis4gv-zfX8449YyDk-t5PJUWh-G_Q2X-Zk
    
  Incluir filme na sua coleção:
  
    POST localhost:3000/collector/add
    
    Exemplo JSON
    {
	  "movieId" : 1370,
	  "userId" : 8
    }
    
    Necessário enviar token de autenticação no header (conforme exemplo acima)
    
  Apagar filme da sua coleção:
  
    DELETE localhost:3000/collector/delete
    
    Exemplo JSON
    {
    "userId": 8,
    "movieId": 1370
    }
    
    Necessário enviar token de autenticação no header (conforme exemplo acima)


## Instalação
**Passo 1**
  
  Servidor SQL Server rodando; ou utilizar Docker e baixar uma imagem.
    
    [Docker] (https://hub.docker.com/r/microsoft/mssql-server-linux/)
    
    Utilizar o seguinte comando: docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=ABC123teste' -p 1433:1433 -d microsoft/mssql-server-linux:2017-latest
    
**Passo 2**

  Rodar o script.sql que se encontra na pasta Script
  
**Passo 3**

  Clonar o repositório
  
**Passo 4**

  Entrar NodeJS Command Prompt; entrar na pasta do projeto e executar os comandos:
  
  npm install
  
  node server.js
  
**Passo 5**

  Executar via [Postman] (https://www.getpostman.com/) ou outra ferramenta da sua escolha.
  


