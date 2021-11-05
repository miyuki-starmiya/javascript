
# React.js

React is JS Framework which is COMPONENT ORIENTED
Components can be reused if you export it. React is superior to Vue about CUSTOMIZING but inferior to it about PRE TEMPLATE

## Install

- CDN
  - JSX: <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  - development: 
    - <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    - <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  - prod: 
    - <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    - <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

Attention: you have to load with <script type="text/babel">

- npm
  - npm init -y
  - npx create-react-app "some-app"

## JSX(JS extension) notation

- JSX is method of React Object. it is same as React.createElement()
- first arg of ReactDOM.render() requires single tag like <div></div>
- class attr in JSX must be written as className. because class is pre reserved word
- you have to close tag with slash. ex: <hr />
- if you need to write variables or functions, you have to surround with {}
- you write JSX in camelCase
- we call it CONTAINER where is injected

those of below is totally same. Babel transpile JSX into React Object

```js
// JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// React Object
const element = React.createElement(
  'h1', // element
  {className: 'greeting'}, // className
  'Hello, world!'// innerHTML
);
```

## Built-in Object

- React: {
    props: [
      Component,
      PureComponent,
    ],
    methods: [
      createElement(),
      createFactory(),
    ]
}
- ReactDOM: {
    methods: [
      render(),
      hydrate(),
      unmountComponentAtNode(),
      findDOMNode(),
      createPortal(),
    ]
}

## React Component

it is parts and available in ReactDOM.render(). it is separated FUNCTION components and CLASS components.
Attention: its initials must be capitalized

- have to divide components
- Component(props) is pure. in other words, props can't be changed
- unless you set return value, component's return value gets undefined

```js
// function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class Component
class Welcome extends React.Component {
  render() { // absolutely required
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

you can reuse components as much as you like

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

- function Component = props + render()
- class Component = function Component
  + state + bind() + lifeCycleMethod()

how to change function component into class component

1. make class component extends React.Component
2. create render()
3. add this. to props
4. change this.props to this.state
5. set constructor(props)
6. add super(props)
7. delete <Component /> property

- this.state is local variable in Component(Instance)
- props, state only affect child components. because those are one direction binding

both props and state are just variable. so you deal with state as props but you should use state if this variable have status of [dynamic, independent, top-component]

let's make simple time app. following code is unfinished

```js
// function Component
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

// class Component v1
class Clock extends React.Component {
  render() { // required
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// class Component v2
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // initial value
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

this is method which called when components mount or unmount. this affects memory leak

Attention: components can't be rendered again if you don't use setState()

```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // initialize
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
    this.setState({ // render() again with changed this.state
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

## Event Handler

- JSX notation doesn't need () with function you will fire
- adapt camelCase to attributes
- you have to write e.preventDefault() clearly

```html
<!-- plain HTML -->
<button onclick="someFunc()">
  some func button
</button>

<!-- JSX -->
<button onClick={someFunc}>
  some func button
</button>
```

### How to bind

React doesn't require setting addEventListener. instead, you must bind eventHandler in components.

how to write

1. bind eventHandler in constructor
2. make eventHandler arrow function
3. make eventHandler arrow function in HTML(not recommended)

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // directory bind pattern
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => { // arrow func pattern
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      // <button onClick={() => this.handleClick()}> // arrow func
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    )
  }
}
```

### how to send props to eventHandler

1. bind directly in JSX. first arg needs this
2. send event value as arrow function

```html
<button onClick={this.eventHandler.bind(this, arg)}>Send arg</button>
<button onClick={(e) => this.eventHandler(arg, e)}>Send arg</button>
```

## control flows

### if, else

vueでいう<v-if>, <v-else>のようなdirectiveはなく, JavaScriptの仕様を極力活用した実装方法を取る

Componentをcondition(true / false)によって使い分けるもっとも基本的な方法, すなわち親コンポーネントでラップする方法を以下に記す

```js
function True() {
  return <h2>this is true</h2>;
}

function False() {
  return <h2>this is false</h2>;
}

function Wrap(props) {
  const condition = props.condition;
  if (condition) {
    return <True />;
  } else {
    return <False />;
  }
}

ReactDOM.render(
  <Wrap condition={false} />,
  document.getElementById('root')
);
```

### class Componentでの条件分岐

function Componentと違って, conditionとComponentも変数化させる

```js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    // HTML発火要素にbind
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // stateのinitialize
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // Componentの変数化
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

### 論理演算子を用いた表現

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && // if (unreadMessages)
        <h2>you have {unreadMessages.length} unread messages</h2>
      }
    </div>
  );
}
```

### for

iterableの操作にはmap()を用いる. map(e => <div>JSX</div>)という風に記述する

```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number =>
  <li>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

### list key

list要素を識別するために用いられる. 識別用途なので, keyは一意に決まるIDが良いとされる. 一意なIDが無い場合はindexを用いることもあるが非推奨である. list作成時にkeyを設定しないとWarningがでる

- keyはmapのアロー関数の戻り値に設定する

```js
const todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

// index
const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);
```

## Form(controlled Component)

form tag内のinput要素をすべてstateにbindさせる. stateとinputをbindさせるために全てにイベントハンドラを記述する必要がある. formに関しては[Formik](https://formik.org/)という依存ライブラリも選択肢の一つである

- inputのvalueは.target.valueで参照可能

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
)
```

### textarea

```js
class EssayForm extends React.Component {
  ...

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### select

```js
class EssayForm extends React.Component {
  ...

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## lift up state

- parent to child: just send props like <Component props={} />
- child to parent: 
  - both parent and child components bind event handler
  - send parent's event handler to child as props
    - you have to name parent's props of event handler like onHandler
    - you have to name parent's event handler like handleSomething
  - child's event handler fire parent's one

## Composition

if you want to send JSX to child component from parent one, you can set {props.children}

```js
function Children(props) {
  return (
    <div>
      // where you output parent JSX
      {props.children}
    </div>
  );
}

function Parent() {
  return (
    <Children>
      // as {props.children}
      <h1>it accepts</h1>
      <p>anything !!</p>
    </Children>
  );
}
```


