# Projeto ABC - Front-end

Este projeto é uma solução para o projeto ABC de Front-end.

## Funcionalidades

O projeto consiste em uma aplicação web com as seguintes funcionalidades:

*   **Cadastro de Usuário**: Formulário para cadastro com validação de campos (nome, e-mail e senha).
*   **Visualização de Informações**: Página que exibe os dados do usuário cadastrado.
*   **Navegação**: Roteamento entre as telas de cadastro e informações.
*   **Estilização Responsiva**: Layout adaptável para diferentes tamanhos de tela.

## Tecnologias Utilizadas

*   **Angular v19** (Framework principal)
*   **JavaScript** (Lógica dos componentes em arquivos `.ts` com sintaxe JS, conforme requisitos)
*   **CSS** (Estilização)
*   **HTML** (Estrutura)

## Como Rodar o Projeto

1.  Certifique-se de ter o Node.js e o Angular CLI instalados.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
4.  Acesse `http://localhost:4200/` no seu navegador.

## Estrutura do Projeto

*   `src/app/header`: Componente de cabeçalho com a logo SVG inline.
*   `src/app/registration`: Componente de formulário de cadastro.
*   `src/app/info`: Componente de exibição de informações do usuário.
*   `src/app/user.service.ts`: Serviço para gerenciamento de estado do usuário (utilizando LocalStorage).
