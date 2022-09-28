## Who's that Pokemon?

### Como jogar?

Ao iniciar a partida será sorteado um Pokemon aleatoriamente da base de dados, o jogador tentará adivinhar qual foi o Pokemon sorteado selecionando o nome no local indicado. Serão 5 chances para tentar solucionar o mistério. Durante as tentativas, em caso de erro os campos com informações incorretas serão sinalizados com um comparativo entre as informações do Pokemon sorteado e as informações do Pokemon selecionado.

### Intuito do projeto

O projeto consiste em desenvolver uma aplicação web, consumir a [API de Pokemons](https://pokeapi.co/) com um limite de 151 pokemons no backend e mostrar meus conhecimentos em desenvolvimento orientado a testes.

### Screenshots

**Início do jogo:**
<img src="/screenshots/initial_page.png"/>

**Iniciando uma jogada:**
<img src="/screenshots/playing_page.png"/>

**Indicando uma resposta errada:**
<img src="/screenshots/wrong_answer.png"/>

**Estado de perda após zerar as tentativas:**
<img src="/screenshots/lost_page.png"/>

**Estado de acerto:**
<img src="/screenshots/won_page.png"/>

**Página de listagem de pokemons:**
<img src="/screenshots/pokemons_list.png"/>

### Como rodar a aplicação?

**1.** Clone este repositório com o seguinte comando:

`git clone git@github.com:Kamila-Vieira/whos_that_pokemon.git`

**2.** Instale as dependências do projeto com um dos seguintes comandos:

`npm install`

ou

`yarn`

**3.** O banco de dados utilizado para o desenvolvimento da aplicação é o [MongoDB](https://www.mongodb.com/), será necessário criar um [cadastro no mongoDB](https://www.mongodb.com/cloud/atlas/register) ou fazer o [login na sua conta](https://account.mongodb.com/account/login). 

**4.** Caso seja um novo cadastro, será apresentada uma tela inicial "Security Quickstart", nela você deverá cadastrar um usuário e senha para a conexão com o banco de dados logo na primeira etapa "How would you like to authenticate your connection?", na segunda etapa "Where would you like to connect from?", será necessário fornecer um endereço de IP válido para a base de dados, clique em "Add My Current IP Address" para adicionar o seu endereço de IP, com ele já será possível rodar a aplicação localmente.

**5.** Na tela "Database Deployments", já com um cluster criado, clique em "connect", depois clique na segunda opção "Connect your application", copie a string de conexão, ela deve se parecer com isso `mongodb+srv://<username>:<password>@<cluster>.#####.mongodb.net/<Base de dados (opcional)>?retryWrites=true&w=majority`. Crie o arquivo `.env` na pasta server do projeto e cole as informações abaixo, em ``CONNECTIONSTRING`` cole a string de conexão, mas antes altere ``<password>`` para a senha pertencente ao seu usuário.

``
  CONNECTIONSTRING=
``
``
  COLLECTION_NAME=pokemons
``

**6.** Rode a aplicação com um dos seguintes comandos:

`npm start`

ou

`yarn start`

### Como testar a aplicação?

Obs.: Para testar a aplicação será necessário a criação de um banco de dados no mongoDB apenas para fins de teste.

**1.** Crie o arquivo `.env.test` na pasta server do projeto e cole as informações abaixo, em ``CONNECTIONSTRING`` cole a string de conexão, mas antes altere ``<password>`` para a senha pertencente ao seu usuário.

``
  CONNECTIONSTRING=
``
``
  COLLECTION_NAME=pokemons
``

**6.** Rode os testes com um dos seguintes comandos:

`npm run test`

ou

`yarn test`
