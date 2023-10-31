# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Trabalahndo com formulários

- Controlled forms
  - é quando mantemos o estado de alguma variável armazenada em tempo real, logo após o usuário digitar agente armazena isso
  - Porém toda vez que o usuario digita algo, o estado irá ser alterado e o react vai atualizar todo o componente novamente, e isso em casos onde temos um componente muito grande pode causar um gargalo ou lentidão.
- Uncontrolled

  - É quando agente busca as informacões digitadas pelo usuário somente quando precisarmos dela
  - ex: o uso do onSubmite em um formulário

- ### React hook form
  - npm i react-hook-form

## Bibliotecas de validação

- zod https://zod.dev/
- yup https://www.npmjs.com/package/yup
- joi https://joi.dev/api/?v=17.9.1

## Reducers

- É um hook do react parecido com o useState
- Vamos utilizar os reducers quando a forma de trabalhar com os estados começarem a ficar muito verbosa ou complexa
  - Ex:
    ```js
    setCycle((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === cycleIdActive) {
          cycle.interruptedDate = new Date();
        }
        return cycle;
      })
    );
    ```
  - Nesse exemplo a alteração do estado de cycle depende do estado anterior dele e temos que fazer um mapeamento nele buscando o cycle que esta ativo pra poder alterar a data, percebe que começou a ficar complexo?
  - Nesses casos utilizamos o useReducer
  -

## Interessante saber

- Imputs do tipio number podemos passar um propriedade chamada _step_
  - se step foi 3 quando vc clica na seta para aumentar o valor, ele vai aumentar de 3 em 3
- **Datalist**
  - lista de sugestoes para um input
  -
- Immerjs
  - Ajuda agente a trabalhar com imutabilidade
  - Entao quando temos que adicionar um valor em um array que esta em um estado, normalmente sem o immer fariamos:
    ```js
    setState([...state, "newValue"]); // como o react trabalha muito com o conceito de imutabilidade
    // toda vez que formos alterar o estado, temos que passar o novo valor, nesse caso, o novo array contendo o novo valor
    ```
  - Utilizando o immer, ele permite que você trabalhe com os dados de uma forma mais fácil, parecendo que não utilizamos imutabilidade
  - ex:
  ```js
  produce(state, (draft) => {
    draft.push("newValue");
  });
  // o primeiro parametro do product é o estado que queremos alterar, o segundo é uma funcao que recebe um parámetro 'draft' (rascunho), que tem exatamente a mesma tipagem do nosso estado, e nos permite trabalha de uma forma mais fácil com os dados.
  // immer deixa seu codigo mais facil de entender
  ```
