# API-Basica

==========================================================================

Esta API REST foi desenvolvida para o gerenciamento de funcionários. Ela fornece operações básicas para listar, adicionar, atualizar e excluir registros de funcionários em um banco de dados MySQL.

==========================================================================

## Estrutura do Projeto:

A API é dividida em vários arquivos, cada um com sua responsabilidade:

-dbconfig.ts: Configuração da conexão com o banco de dados.

-funcionario.ts: Definição da tabela de funcionários no MySQL.

-order.ts: Conexão com o banco de dados e métodos para operações CRUD.

-orderRouter.ts: Roteamento da API, ligando os métodos do MySQL e validando as solicitações.

-app.ts: Configuração do servidor Express e definição das rotas.

==========================================================================

## Metodos:

Os comandos mais básicos para se usar com a API para conexão de Cliente / Server:

### Listar Funcionários (GET)
Rota: /

Descrição: Retorna uma lista de todos os funcionários no banco de dados.

### Cadastrar Funcionário (POST)
Rota: /

Descrição: Cadastra um novo funcionário no banco de dados.

### Atualizar Funcionário (PUT)
Rota: /:id

Descrição: Atualiza um funcionário existente com base no ID fornecido.

### Deletar Funcionário (DELETE)
Rota: /:nome

Descrição: Deleta um funcionário com base no nome fornecido.

==========================================================================

## Tutorial de Uso:

Para testar a API siga os passos abaixo:

1) Certifique-se de que as dependências do projeto estejam instaladas. No terminal, navegue até o diretório raiz do projeto e execute o seguinte comando para instalar as dependências: npm install

2) Certifique-se de que seu servidor MySQL esteja em execução e que a configuração do banco de dados (dbconfig.ts) esteja correta

3) Execute o seguinte comando para iniciar o servidor (garanta que o TypeScript foi convertido em JavaScript): npm start

4) A API estará ativa e pronta para uso. Você pode interagir com ela por meio de solicitações HTTP

##### Aviso: 

Se você precisar alterar as configurações de conexão com o banco de dados, edite o arquivo dbconfig.ts para refletir as novas configurações, como host, usuário, senha, nome do banco de dados ou porta. Certifique-se de que as configurações do banco de dados correspondam às configurações do seu ambiente.

### Exemplo de Solicitações:

##### Listar todos os funcionários (GET):

GET http://localhost:5000/

##### Cadastrar um novo funcionário (POST):

POST http://localhost:5000/

Body JSON: { "id": 1, "nome": "Haadty", "data_nasc": 2021-01-01", "cpf": "564.456.789-00", "email": "daratyd@gmail.com", "tel": "69 9234-1834" }

##### Atualizar um funcionário pelo ID (PUT):

PUT http://localhost:5000/1

Body JSON: { "nome": "Novo Haadty", "data_nasc": "2005-02-02", "cpf": "987.632.321-00", "email": "emailnovo@gmail.com", "tel": "69 9452-3210" }

##### Deletar um funcionário pelo nome (DELETE):

DELETE http://localhost:5000/Haadty
