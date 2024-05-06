# Documentação da API

## Visão Geral

Esta documentação descreve as rotas disponíveis na API para interação com o serviço de jogos.

## URL Base

`http://localhost:3080`

## Rotas GET

- `/`  
  Lista todos os jogos disponíveis.

## Rotas POST

- `/novogame`  
  Cria um novo jogo.

## Rotas PUT

- `/novogame/{id}`  
  Atualiza um jogo existente. Substitua `{id}` pelo ID do jogo desejado. Os IDs disponíveis são 5, 6, 7, 8, 9 e 10.

## Prints da tela
![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/ListaDeGames/images/rotas.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/ListaDeGames/images/rotas1.PNG)

![Captura de Tela Principal](https://github.com/cristianbrunone/SENAI-NODE-JS/blob/main/CristianBrunone/ListaDeGames/images/rotas2.PNG)


## Exemplo de Uso

### Listar jogos disponíveis

```bash
curl http://localhost:3080
