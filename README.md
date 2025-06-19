```markdown
# PokéApp | Desafio Front-end Ionic/Angular

![Ionic](https://img.shields.io/badge/Ionic-%233880FF.svg?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)

Aplicação mobile desenvolvida com Ionic e Angular para o desafio de avaliação técnica, consumindo a API pública [PokeAPI](https://pokeapi.co/).

---

### Demonstração

[Link para o seu GIF aqui]

_(Recomendação: Grave um vídeo curto mostrando as funcionalidades principais - lista, scroll infinito, detalhes e favoritos - e converta para um GIF usando um site como o ezgif.com)_

---

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como uma solução para um desafio técnico, com o objetivo de criar um aplicativo funcional e bem estruturado para explorar o universo Pokémon. O foco principal não foi apenas na entrega das funcionalidades, mas na aplicação de boas práticas de desenvolvimento, arquitetura limpa e uma experiência de usuário fluida.

### ✨ Funcionalidades Implementadas

- [x] **Listagem de Pokémons:** Visualização de Pokémons com scroll infinito para carregamento sob demanda.
- [x] **Detalhes do Pokémon:** Tela de detalhes completa com estatísticas, habilidades, tipos, peso, altura e outras imagens (sprites).
- [x] **Navegação por Abas:** Sistema de navegação principal com abas para "Pokédex" e "Favoritos".
- [x] **Sistema de Favoritos:** Funcionalidade para marcar e desmarcar Pokémons como favoritos.
- [x] **Persistência de Dados:** Os Pokémons favoritados são salvos localmente no dispositivo, utilizando `@ionic/storage-angular`.
- [x] **Interface Responsiva:** O layout se adapta a diferentes orientações do dispositivo (retrato e paisagem).

---

## 🚀 Tecnologias Utilizadas

- **Ionic Framework v7+:** Framework principal para o desenvolvimento de aplicações móveis multiplataforma.
- **Angular v17+ (Componentes Standalone):** Utilizando a arquitetura mais moderna do Angular para componentes mais enxutos e modulares.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática, aumentando a robustez do código.
- **RxJS:** Para programação reativa e gerenciamento de fluxos de dados assíncronos.
- **SCSS:** Pré-processador CSS para estilos mais organizados e reutilizáveis.
- **Capacitor:** Para garantir que a aplicação web possa ser transformada em um app nativo para iOS e Android.

---

## 🏛️ Arquitetura Adotada

Para garantir um código desacoplado, testável e de fácil manutenção, o projeto foi estruturado seguindo os princípios da **Clean Architecture**.

A aplicação é dividida em três camadas principais:

1.  **Domain (Domínio):** O coração da aplicação. Contém os modelos de dados (`Pokemon`, `PokemonDetail`) e os casos de uso (`GetPokemonsUseCase`) que definem as regras de negócio puras, sem depender de nenhum framework ou fonte de dados externa.

2.  **Data (Dados):** Responsável por obter os dados. Implementa os repositórios definidos pelo Domínio, fazendo a comunicação com fontes externas (PokeAPI) e locais (`@ionic/storage`). É aqui que os dados da API são transformados nos modelos limpos do Domínio.

3.  **Presentation (Apresentação):** A camada de UI, com a qual o usuário interage. Contém as Páginas e Componentes do Ionic/Angular, que dependem dos UseCases do Domínio para executar ações e exibir os dados.

A regra de dependência é estrita: as camadas externas (Presentation, Data) conhecem as internas (Domain), mas o Domínio não conhece ninguém. Isso torna a lógica de negócio totalmente independente e reutilizável.

### Estrutura de Pastas
```

src/app/
├── core/ \# Serviços globais (ex: FavoritesService)
├── data/ \# Implementações de repositórios e serviços de API
├── domain/ \# Modelos de negócio e casos de uso (UseCases)
├── presentation/ \# Páginas, componentes e layout (Abas)
└── ...

````

---

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) (versão 18+) e o [Ionic CLI](https://ionicframework.com/docs/cli) instalados na sua máquina.

```bash
# Instalar o Ionic CLI globalmente
npm install -g @ionic/cli
````

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/maia2a/pokeapp.git](https://github.com/maia2a/pokeapp.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd pokeapp
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    ionic serve
    ```

A aplicação será aberta automaticamente no seu navegador em `http://localhost:8100`.

---

## ⚖️ Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

```

```
