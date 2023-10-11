# API-Basica
=======================================================================================

a API usa os seguintes recursos principalmente: API Rest, TypeScript, BodyParser

Outros mais secundários como: cpf-cnpj-validator e validator.js

=======================================================================================

## Divisão da API em Arquivos:

-dbconfig.ts: onde e configurado a conexão com o banco de dados

-funcionario.ts: onde é definido como vai ser a tabela funcionario do mysql

-order.ts: onde tem a conexão e os métodos de mysql para usar no Banco de Dados

-orderRouter.ts: ligando os métodos mysql a api rest e também validando tudo 

-app.ts: onde tudo é ligado no servidor e no json para passagem de informações

=======================================================================================

## Metodos:

Os comandos mais básicos para se usar com a API para conexão de Cliente / Server:

'GET/': lista todo os funcionários no banco de dados

'POST/': cadastrar um funcionário novo no banco de dados

'PUT/:id':atualiza a tabela funcionários pela ID

'DELETE/:nome': deleta um funcionário pelo seu Nome

=======================================================================================

## Tutorial de Uso:

Para testar a API siga os passos abaixo:

1) Primeiro Inicie Banco de Dados presente na pasta 'DB' em seu Mysql Workbench

2) Após isso se já não tiver depurado para conversão de TypeScript para JavaScript no terminal execute o seguinte comando: npm start

3) Com isso o server já começa automaticamente para testes mais se deseja iniciar de outra forma, pode se colocar o seguinte código no terminal: node dist/app.ts

4) Depois de tudo isso só usar os comandos comentados acima 


