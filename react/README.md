
コンポーネント指向のJSフレームワーク。
コンポーネントはexportして、モジュール間で再利用する

## Install

- CDN
  - JSX: <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  - development: 
    - <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    - <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  - prod: 
    - <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    - <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
※HTMLからJSを読み込む時<script type="text/babel">とすること

- npm
  - npm init -y
  - npm install babel-cli@6 babel-preset-react-app@3
  - npx babel --watch src --out-dir . --presets react-app/prod

## JSX(JS extension)記法

- JSXはReactObjectのメソッドである
- render()の第一引数は単一タグで記載する必要がある(divタグで囲う)
- class属性はclassName属性に置換(classが予約語のため)
- 閉じタグ無しはスラッシュ要 ex: <hr />
- 変数や関数は{}で囲う
- JSXはcamelCaseで記述
- ReactDOM.render(JSX)で任意のHTMLidに挿入
- HTML内に挿入する場所をcontainerと呼ぶ

以下は等価であり、Babelでトランスコンパイルしている

```js
// JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// React Object
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

## 組み込みObject

- React: {
    props: {
      Component,
      PureComponent,
    },
    methods: {
      createElement(),
      createFactory(),
    }
}
- ReactDOM: {
    methods: {
      render(),
      hydrate(),
      unmountComponentAtNode(),
      findDOMNode(),
      createPortal(),
    }
}



## State = Vuex store

クラスに対してstateプロパティを持たせることで変数を永続化させる

- React.Componentクラスを継承したClassを作成する
- constructor()では親クラスをsuper()として呼び出し、this.stateでデータを永続化
- render()メソッドによって、レンダリングしたいHTML要素を定義

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // bind
    this.incr = this.incr.bind(this);
  }

  incr() {
    // constructor外部ではsetStateで変数格納
    // 変数を取得する際はprevStateを使う
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div style={{backgroundColor:this.props.color}} onClick={this.incr}>
        {this.state.count}
      </div>
    );
  }
}

ReactDOM.render(
  <div className="container">
    <ul>
      <li><Counter color="tomato" /></li>
      <li><Counter color="skyblue" /></li>
      <li><Counter color="limegreen" /></li>
    </ul>
    <div className="total">TOTAL INVENTORY: 3</div>
  </div>,
  document.getElementById('root')
);
```

```js
function Counter(props) {
  return (
    <div style={{backgroundColor: props.counter.color}}>
      {props.counter.id}: {props.counter.count}
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
      {id: 'A', count: 0, color: 'tomato'},
      {id: 'B', count: 0, color: 'skyblue'},
      {id: 'C', count: 0, color: 'limegreen'},
      ]
    }
  }
  render() {
    return (
    <div className="container">
      <ul>
        <li><Counter counter={this.state.counters[0]} /></li>
        <li><Counter counter={this.state.counters[1]} /></li>
        <li><Counter counter={this.state.counters[2]} /></li>
      </ul>
      <div className="total">TOTAL INVENTORY: 3</div>
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```




