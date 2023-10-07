# React

- Biblioteca para criação de interfaces altamente interativas
- Rendering patterns

  - SPA (Single page application)

    - Angular pioneira desse conceito
    - É uma forma de renderizar as páginas html de forma dinâmica, sem precisar recarregar a página
    - Esse conceito da a impressão que estamos em uma única página, não da a sensação de que estamos recarregando a página quando somes
      redirecionados
    - O cliente solicita a página, o servidor retorna o HTML/CSS/JS e o cliente interpreta e renderiza a página
      O cliente faz as requisições para o servidor por meio do js e o servidor retorna um json com os dados

      (Essa forma permite o servidor funcionar tando para web, quando para mobile, pq a única coisa que o servidor precisa fazer É
      obter a solicitação de dados em uma rota e retornar um json)

  - SSR (Server side rendering)
    - Renderização pelo lado do servidor
    - O cliente solicita a página para o servidor, e o mesmo retorna o HTML/CSS/JS prontos para o navegador interpretar
    - Então enquando o servidor não fez todas as requisições no banco, não processou essas informações e montou o HTML
      para enviar para o cliente, o cliente fica esperando em uma tela em branco
    -

## Bundlers e compilers

Como os navegadores não conseguem acompanhar a evolução do JS, muita das vezes eles não entendem as versões mais novas do
JS, então é necessário que o código seja compilado para uma versão mais antiga do JS, para que o navegador consiga interpretar
o código. Atualmente um dos compialdores mais utilizados é o Babel
\_ A função principal dos bundlers é pegar todos os arquivos JS e juntar em um único arquivo, para que o navegador não precise fazer
várias requisições para o servidor, e sim apenas uma requisição para o servidor, e o servidor retorna um único arquivo JS.
Então o bundler pega todos os seus arquivos js e junta em um único arquivo, e esse arquivo é o que o servidor retorna para o cliente.
Atualmente um dos bundlers mais utilizados é o Webpack

- OBS: Hoje a maioria dos navegadores ja suportam por padrão os ecmascripts modules (import/export), então não é necessário o webpack
  para fazer o tabalho de bundling. Para usar o import e export é preciso ter um
    <script type="module" src="index.js"></script> no html.

- O vite utiliza por padrão os ecmascripts modules, ou seja não é necessário o webpack blunder, e ele mesmo tem seu próprio compiler,
  ou seja não é necessário o babel compiler

## Componentes em React

## Propriedades

## CSS modules

- É uma forma de isolar o css de cada componente, para que não haja conflito de estilos entre os componentes
- Para utilizar o css modules é necessário instalar o pacote css-loader
  (Porém o próprio vite ja traz suporte a css modules)
- Para utilizar o css modules é necessário que o arquivo css tenha a extensão .module.css
- Para utilizar o css modules é necessário importar o css no arquivo js, e utilizar o nome da classe css como se fosse uma propriedade
  do objeto importado

  - exemplo:
    - `import styles from './styles.module.css'`
    - `<div className={styles.container}></div>`

  * OBS: O css modules evita que o css interfira em outros componentes porque ele gera nomes de classes aleatórios na compilação

## CSS global

- crie um arquivo `global.css` na raiz do projeto e importe ele no App.jsx
  - `import 'global.css'`

`global.css`

```css
//variáveis css
:root {
  --white: #fff;
  --gray-100: #e1e1e6;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;
  --green-500: #00875f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--gray-900);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased; // aplica um padrão pra deixar as fontes mais bonitas/fininhas, principalmente pra quando não estamos utilizando fontes padrão do sistema
}

body,
input,
textarea,
button {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

@media (max-width: 768px) {
  /*
   Estou definindo que o tamanho da font para celular vai ser de 87.5% (14px),
   fazendo isso todo lugar que utiliza a unidade de medida rem irá se ajusatar conforme o tamanho padrão do font-size.
   (O padrão de tamanho normalmente é 16px (1rem), porém alteramos para 14px entao tudo que utiliza rem, irá diminuir automaticamente)
   
   É importante utilizar porcentagem ao invés de px, porque o px impede a funcionalidade do usuário poder alterar o tamanho da font do celular dele porque definimos um padrão de px ao invés de porcentagem, sendo assim se ele aumentar o tamanho da fonte, no celular na sua aplicação n vai surgir efeito, entao utilize sempre porcentagem nesse caso

  */
  html {
    font-size: 87.5%;
  }
}
```

## Programação imperativa

- É uma forma de escrever o código, que diz para o nosso software oque deve ser feito
  - Nós falamos exatamente passao-a-passo oque deve ser feito
  - Tipo de programação mais comum

## Programação declarativa

- É uma forma de escrever código, que diz o seguinte:
  - Ao invés de eu falar o passa-a-passo eu declaro qual é o resultado que eu espero
  - Quais são as condicões para eu ter meu resultado final

## Imutabilidade no react

- É um conceito que declara que as coisas n sofrem mutações e sim são substituidas
- Ex
  - Se tivermos um array assim: `[1,2,3,4,5]`, caso agente queira adicionar um valor na frente
    utilizando este conceito nós deveriamos pegar esse array e substiruir por outro array com o novo valor
    ex: `js [1,2,3,4,5,6]`.
  - Nunca alteramos um valor de uma variável na memória
    E sim criamos um novo espaço em memória
  - No geral a imutabilidade permite que a aplicação seja mais performática.
    Principalmente no react, que fica comparando pra ver se o estado mudou ou n.
    Porque ele tem que ficar monitorando o valor na memória para ver se ele mudou ou n
    **Simplemente alrterando o valor o react n precisa comparar** e sim so renderizar.

## Validação de formulários

- Podemos adicionar propriedades nos campos

  - required
  - onInvalid: Que é uma função que vai dizer se esta invalida ou n

    - Es:

      ```jsx
      function handleUserNameInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!"); //altera a frase padrão que aparece nos campos
      }

      function handleChangeInput() {
        event.target.setCustomValidity("");
        setUserName(event.target.value);
      }

      <input
        type="text"
        name="username"
        required
        onChange={handleChangeInput}
        onInvalid={handleUserNameInvalid}
      />;
      ```

## Entendendo a key no react

- Existem 3 principais momentos que um componente é renderizado no react

  - Primeiro
    - Quando o elemento pai é rederizado fazendo todos os olementos filhos serem renderizados novamente
  - Segundo
    - Quando o estado altera, todo o componente é renderizado novamente

  ```jsx
   const [name,setName]=useState('')
   <Component /> //Componente renderizado novamente
  ```

  - Terceiro
    - Quando a propriedade de um componente é renderizado

  ```jsx
    const [name,setName]=useState('')
    <Component name={name}/> //Componente renderizado novamente
  ```

- Ta mas porque saber isso?
  - A propriedade key ajuda o react a rentender qual componente ja foi renderizado
  - Quando temos uma listagem muito grande, passamos a key prop pra cada componente, entao caso o componente react for renderizado
    novamente ele vai ver que o Componete com a key prop = 1 ja foi renderizado entao ele n precisa renderizar esse componente novamente
    Fazendo com que haja uma melhoria na performance. o react so vai renderizar os componentes que nao foram renderizados antes
  -

# Aprimorando a aplicação

## Fundamentos do TS

-

## Interessante saber

- Quando vamos utilizar horário no html, existe uma tag chamada `time` que nos ajuda bastante com isso

  - Ela é uma tag que pode ter uma propriedade chamada `dateTime` (no react) ou `date-time` (html normal), que indica o horário específico, por exmplo se o horário fosse "Publicado a 1h", leva a pergunta: "Tá, foi publicado a uma hora, mas e se eu quiser saber qual horário foi publicado?". É exatamente isso que o atributo dateTime faz, nele vc pode colocar o horário exato (no inspecionar esse horário vai aparecer), você pode colocar um title também se quiser.
    - Exemplo:
      - `<time title="11 de Maio às 08:12" dateTime="2023-10-12 08:12:34">Publicado a 1h</time>`

- `form:focus-within` (https://css-tricks.com/almanac/selectors/f/focus-within/)

  - se houver qualquer foco em de algum elemento dentro do form, então faz alguma coisa

    - Exemplo

      ```html
      <form>
        <header>Title</header>
        <input type="text" name="texto" />
        <textarea></textarea>
        <button type="submit">Enviar</button>
      </form>
      ```

      ```css
      /*
      sempre que houver um foco em qualquer elemento dentro de form, sejam eles:
        input, textarea, button ou header irecomos aplicar um "background: red" dentro do header
      */
      form:focus-within header {
        background-color: red;
      }
      ```

- ## Trabalhando com datas em js

  - Intl permite que consigamos fazer formatações de datas, formato de dinehiro e etc.
  - biblioteca: date-fns

- ## Atualizando estados com react

  - Sempre que eu for chamar uma funcao que vai atualizar um estado e eu precisar de estado anterior também,
    é interessante usarmos esse padrão para pegar o valor do estado atual e alterar
    ex:

    ```jsx
      handleAddLike(){ // esse formato de função consegue pegar o valor do estado atual e alterar
        setLikes((state)=>{ // like = 1
          return state+1;
        })
        setLikes((state)=>{ // like = 2 (stado anterior (1) + 1)
          return state+1;
        })
      }

    ```

    OBS: https://caniuse.com/ ajuda muito a descobrir qual funcionalide js por exemplo funciona em qual navegador
