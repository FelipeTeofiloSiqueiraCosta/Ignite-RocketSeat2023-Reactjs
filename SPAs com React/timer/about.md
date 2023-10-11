# Projeto timer com react

## Tecnologias utilizadas

- Reactjs
- Typescript
- Styled Components

### Styled components

- Utilizamos esta tecnologia para termos mais flexibilidade em trabalhar com componentes dinâmicos
- Essta tecnolgogia ajuda muito atrabalhar com classes ou componentes variantes
  - Exemplos:
    - src/example/components/Button
- ## Podemos criar temas com o styled components também

- #### Tipagem de temas
  - ./src/@types/styled.d.ts (o nome do arquivo tem o @ na frente pra deixar o arquivo em cima de todas as paginas)
    - esse .d.ts significa que dentro desse arquivo eu só vou ter coisas que se relacionam com tipagem no typescript
      - interface
      - type
      - typeof e etc
- #### Estilos globais com styled components

  - ./src/example/styles/global.ts
    - Importe ele la no app.tsx

- #### Configurando o ESlint
  - ESlint = Ecma script linting
    - linting é uma maneira de validar se você está seguindo padrões de programar estipulado pelo seu time que desenvolverá o projeto
      - ex: ";" no final das linhas e etc
    - npm i eslint -D
    - npx eslint --init
    - npx eslint src --ext .ts,.tsx (lint vai verificar os arquivos dentro de src que terminam com .ts e .tsx)
    - npx eslint src --ext .ts,.tsx --fix (caso ele encontrar algo fora do padrão ele ja concerta)
    -
