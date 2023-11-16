# Projeto Fastify Node.js

Este é um projeto simples usando Fastify para criar um servidor Node.js que lê e modifica dados em um arquivo JSON com a biblioteca `node-cron`.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Instale as dependências:

    ```bash
    cd seu-repositorio
    npm install
    ```

3. Execute o servidor:

    ```bash
    node index.js
    ```

## Funcionalidades

### Adicionar Aluno

A cada minuto, o servidor adiciona um aluno chamado "Rafael Perez" à lista de alunos no arquivo `dados.json`.

### Ler Dados

Você pode acessar os dados lidos do arquivo `dados.json` visitando [http://localhost:3006/ler-dados](http://localhost:3006/ler-dados).

## Estrutura do Projeto

- **index.js:** O arquivo principal que define o servidor Fastify e as rotas.
- **dados.json:** Um arquivo JSON que armazena dados, incluindo uma lista de alunos na "Turma".

## Dependências

- [Fastify](https://www.fastify.io/): Um framework web leve e eficiente para Node.js.
- [node-cron](https://www.npmjs.com/package/node-cron): Uma biblioteca para agendamento de tarefas baseado em cron.

## Observações

Este é um projeto didático e não deve ser usado em produção sem ajustes significativos. Certifique-se de implementar práticas de segurança adequadas para ambientes de produção.

---