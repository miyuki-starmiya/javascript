
# React.js

React is JS Framework which is `component oriented`
Components can be reused if you export it. React is superior to Vue about `customizing` but inferior to it about `pre template`

## Install

- CDN
  - JSX(Babel): <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  - development: 
    - React: <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    - ReactDOM: <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  - prod: 
    - React: <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    - ReactDOM: <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>

Attention: you have to load with <script type="text/babel">

- npm
  - npm init -y
  - npx create-react-app "some-app"

## JSX(JavaScript XML) notation

- JSX is method of React Object. it is same as React.createElement()
- first arg of ReactDOM.render() requires single tag like <div></div>
- class attr in JSX must be written as className. because class is pre reserved word
- you have to close tag with slash. ex: <hr />
- if you need to write variables or functions, you have to surround with {}
- you write JSX in camelCase
- we call it `container` where is injected

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

JSX allows us to nest elements, JS values

```js
const name = 'saitou';
const greeting = (
  <div>
    <h1>My name is {name}</h1>
    <p>hello new world !</p>
  </div>
);
```


## VDOM(VirtualDOM)

React use `VDOM` for updating real DOM.
VDOM is much faster than real DOM because VDOM don't render DOM on screen.
VDOM compares to only changed part on VDOM, which is called "diffing"

how it works is below
1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
3. The changed objects, and the changed objects only, get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.

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

### express with short conditionals and logical operator

```js
const Navbar = () => {
  const isAuth = true;

  return (
    <div>
      // if user is authenticated, show auth links, otherwise a login link
      {isAuth ? <AuthLinks /> : <Login />}
      // if user is authenticated, show their profile. If not, nothing.
      {isAuth && <UserProfile/>}
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

if you want to send JSX or Components to child component from parent one, you can set {props.children}

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
      <SomeComponent />
    </Children>
  );
}
```


# Hooks

Hooks are a new addition in React 16.8. they let you use state and other React features without writing a class component

Hooks are `functions` that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes

- function components + Hooks = class components

Attention: Hooks start with "use"

## useState

this provides function components with local state. this is similar to this.setState in class components

useState creates [stateful value, state handler]

```js
import React from 'react';

class Counter extends React.Component {
  // state or model
  constructor(props) {
    super(props);
    // bind func
    this.incr = this.incr.bind(this);
    this.state = { num: 0 };
  }

  // actions or controller
  incr() {
    this.setState({ num: this.state.num + 1 })
  }

  // view
  render() {
    return (
      <div>
        <p>class num is {this.state.num}</p>
        <button onClick={this.incr}>incr</button>
      </div>
    )
  }
}

```

below code is equivalent

```js
import React, { useState } from 'react';

function Counter() {
  // [value, eventValue] = useState(initialValue);
  // state and actions
  const [count, setCount] = useState(0);

  // view
  return (
    <div>
      <p>You clicked {count} times</p>
      // bind func by arrow func
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

## useEffect

this provides function components with LifeCycleMethods like componentDidMount, componentDidUpdate, componentWillUnmount

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Rules

- only call Hooks at the top level. don't call Hooks inside loops, conditions, or nested functions
- only call Hooks from React function components. don't call Hooks from regular JavaScript functions


# styled-components

styled-components allow you to write CSS in JS.

styled.component`` = function Component()

features are below
- automatic critical CSS
- no class name bugs
- easier deletion of CSS
- simple dynamic styling
- painless maintenance
- automatic vendor prefixing

## install

```shell
# npm
npm install --save styled-components
# yarn
yarn add styled-components
```

## import

we call styled components literal `tagged template literal`

```js
import styled from 'styled-components';
// example
const Button = styled.button``;
```

## add class attribute

if you insert JS in styled-components, you surround it with ${}

```js
import styled, { css } from 'styled-components'

const StyledComponent = styled.element`
  /* this is general css */
  property: value;
  ${props => props.class && css`
    /* this is class css */
    property: value;
  `}
`;
```

## extend styles(like inheritance)

like Class extends

```js
const ChildComponent = styled(ParentComponent)`
  property: value;
`
```

## how to pass props

you can put props in styled-components by using arrow function

```js
const StyledComponent = styled.element`
  property: ${props => props.someAttribute || "defaultValue"};
`;

<StyledComponent someAttribute="value" />
```

## Material UI

this is UI(styling) library for React.

## features

- templates
- components
- theme

## install

```shell
// with npm
npm install @mui/material @mui/styled-engine-sc styled-components

// with yarn
yarn add @mui/material @mui/styled-engine-sc styled-components
```



# React Router

React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs, on the web, on the server with node.js and on React Native

## install

```shell
# create react app
npx create-react-app "app-name"
# add react router
npm add react-router-dom@6 history@5
```

## import

```js
import { SomeModule } from 'react-router-dom';
```

## modules

- BrowserRouter: top level module
- Link: global navigation. like HTML a tag
  - to: "/path"
- NavLink: special kind of Link that knows whether or not it is active
- Routes: the primary ways to render something in React Router based on the current location
- Route: kind of like an if statement; if its path matches the current URL, it renders its element
  - path: "path" without "/"
  - element: render React Component
- Outlet: 


# Redux

Redux is a `predictable state container` for JavaScript apps.
Redux is a pattern and library for managing and updating application state, using events called `actions`
Redux helps you manage `global state`

## SVA(State View Actions) model

- state: the source of truth that drives our app
- view: a declarative description of the UI based on the current state
- actions: the events that occur in the app based user input, and trigger updates in the state. this is like eventHandlers

## main elements of Redux

- store: this is global component that stores the current state and it is an immutable object
- action: state in the store is not changed directly, but with different actions. like `hooks` as functions
- reducer: it is used to define the impact of the action on the state of the application
- actionCreator: function that returns an action
- subscribe: it is used to create a callback function the store calls when its state is changed

### Redux Thunk

this is `redux-middleware` which must be initialized along with the initialization of the store

- dispatch: eventHandler
- selector: access state and re-render

Redux principles:
  - The global state of your application is stored as an object inside a single store
  - The only way to change the state is to dispatch an action
  - Changes are made with pure reducer functions





## install

- install Redux Toolkit

```shell
# NPM
npm install @reduxjs/toolkit
# Yarn
yarn add @reduxjs/toolkit
```

- or Redux Core

```shell
# NPM
npm install redux react-redux redux-thunk
# Yarn
yarn add redux react-redux redux-thunk
```


## how to implement

create store.
before this, you have to create `reducer`
reducer require below arguments

1. state value
2. action

createStore() accepts three arguments

1. reducer(required)
2. initial state value(optional)
3. enhancer where we can pass middleware(optional)

```js
import { createStore } from 'redux';

// first, you need to create reducer
const reducer = (state = 'initialValue' , action) => {
  switch (action.type) {
    case 'ACTION1':
      // some action
      return state1;
    ...
    default:
      return state;
  }
}

const store = createStore(
  reducer
);

// when state changed, store calls callback
store.subscribe(() => {
  // callback
});
```

define dispatching actions. actions are objects sent to the store
dispatch(actionCreator). actionCreator is just function, returns object

```js
const actionCreator = (value) => {
  return {
    type: 'ACTION_NAME';
    key: value;
  }
}

store.dispatch({
  actionCreator(value);
})
```

apply store to our app

```js
import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Components>
    </Provider>
  )
}

export default App;
```

### redux functions

```js
import { createStore } from 'redux';

const store = createStore(reducer);
```

```js
import { combineReducers } from 'redux';
combineReducers({
  describe: reducerName,
})
```

## Redux Toolkit

this is Redux Library

