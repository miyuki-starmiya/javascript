
コンポーネント指向のJSフレームワーク。

## JSX記法

- render()の第一引数は単一タグで記載する必要がある(divタグで囲う)
- class= は className=
- 閉じタグ無しはスラッシュ要 ex: <hr />
- 変数や関数は{}で囲う
- html/cssはcamelCaseで記述

```js
  const name = 'hitoe';
  function showMessage() {
    alert.('Message');
  }

  ReactDOM.render(
    <div className="box" onClick={showMessage}>
      <h1>Hello, {name.toUpperCase()}!</h1>
      <p>hoge</p>

      <hr />
    </div>,
    document.getElementById('root')
  );
```

## React Component

- Componentは再利用可能部品
- 親Componentから子Componentへの引数授与は**props**を使う

```js
      function incr(color) {
        alert(color);
      }

      function Counter(props) {
        return (
          <div style={{backgroundColor:props.color}} onClick={() => 
            incr(props.color)}>
            0
          </div>
        );
      }

      ReactDOM.render(
        <div className="container">
          <ul>
            <li><Counter color="tomato" /></li>
            <li><Counter color="skyblue" /></li>
            <li><Counter color="limegreen" /></li>
          </ul>
        </div>,
        document.getElementById('root')
      );
```

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




