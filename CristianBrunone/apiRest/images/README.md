# CRUD com Node.js - API de Unidades Federativas (UFs)

Este projeto é uma API básica construída com Node.js e Express que fornece informações sobre Unidades Federativas do Brasil.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório em sua máquina local.
3. Na pasta do projeto, execute o comando `npm install` para instalar as dependências.

## Como Usar

1. Após a instalação, execute o servidor Node.js com o comando `node app.js` ou `npm start`.
2. O servidor estará rodando na porta 8080 por padrão.

### Listar todas as UFs
GET /ufs

Retorna uma lista de todas as UFs cadastradas. Você pode filtrar as UFs por nome utilizando a query string `busca`.

Exemplo de requisição:
GET /ufs?busca=Rio de Janeiro

### Obter detalhes de uma UF específica
GET /ufs/:iduf

## Testando a API

Você pode usar o ThunderClient ou qualquer outra ferramenta de teste de API para testar as rotas disponíveis. Abaixo estão alguns exemplos de testes ThunderClient:

### Exemplos

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/busca1.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/busca2.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/busca3.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/busca4.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/busca5.PNG)

### Testando Erros

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/buscaErro.PNG)

### Atividades

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/img1.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/img2.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/apiRest/images/img3.PNG)



