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

## Interessante saber

- Imputs do tipio number podemos passar um propriedade chamada _step_
  - se step foi 3 quando vc clica na seta para aumentar o valor, ele vai aumentar de 3 em 3
- **Datalist**
  - lista de sugestoes para um input
  -
