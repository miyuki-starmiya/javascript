
# React.js

コンポーネント指向のJSフレームワーク.
コンポーネントはexportして、モジュール間で再利用する.
Vueに比べてテンプレート性がない代わりに、カスタマイズ性に優れている

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

## React Component

ReactDOM内で再利用可能な部品群。関数コンポーネントとクラスコンポーネントがある。
※先頭は大文字にする必要がある

- Componentは分割せよ
- Component(props)において、propsの戻り値を変えてはいけない(pure)

```js
// 関数コンポーネント
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// クラスコンポーネント
class Welcome extends React.Component {
  render() { // 絶対に必要なメソッド
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

以下のようにして、いくらでも再利用可能

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="taro" />
      <Welcome name="jiro" />
      <Welcome name="hanako" />
    </div>
  )
}

ReactDOM.render(
  <MultiWelcome />,
  document.getElementById('root')
);
```


### Component state(Class Component)

関数コンポーネントにstateを付与して、クラスコンポーネントにすることで変数を永続化させる

1. React.Componentクラスを継承したClassを作成する
2. render()メソッドを挟む
3. propsをthis.propsとして参照する
4. this.propsをthis.stateに書き換えある
5. constructor(props)を追加する.
6. super(props)で親クラスにpropsを渡す
7. <Component />のプロパティを削除する

- this.stateはComponent(Instance)内のlocal scopeである
- propsやstateは単方向バインディングだから、子コンポーネントにしか影響を与えない

以下ではまだクラスコンポーネントは完成しません

```js
// 関数コンポーネント
function Clock(props) {
  return (
    <div>
      <h1>Hello, world</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// クラスコンポーネント v1
class Clock extends React.Component {
  render() { // renderは必須
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// クラスコンポーネント v2
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // 初期値
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

### Life Cycle Method

Componentがmountあるいはunmountされた時に呼び出すメソッド. Componentのメモリリークに影響する

※setState()を利用せず、直接this.stateを変更すると再度render()されない

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // 初期化
  }

  componentDidMount() { // mount
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // unmount
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ // this.stateを変えて再度render()
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```





