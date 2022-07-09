
JavaScript was released by the `Mosaic web browser`. ECMAScript6(2015)で非常に大きなアップデートが行われた.
JavaScript は文(Statement)と式(Expression)から構成される(文 ⊂ 式)

- ECMAScript: Ecma International という団体によって標準化されている仕様. この技術委員会は Microsoft、Mozilla、Google、Apple といったブラウザベンダーや ECMAScript に関心のある企業などによって構成されている. `後方互換性`を重視しているので過去のコードが使えなくなることはあまり考えられない
- Transpiler: Babel や TypeScript Compiler. ES の仕様として合意されてない構文を解析するトランスコンパイラ

## Features

- curly-bracket syntax {}
- dynamic typing
- prototype-type-based OOP
- class-based OOP(ES6)
- first-class functions

## APIs

- text
- dates
- regular expressions
- standard data structures
- DOM(DocumentObjectModel)

# Ecosystem

- Frontend UI libraries: React, Vue, Angular
  - frameworks: Next.js, Nuxt.js
- Backend runtime: Node.js, Deno
  - frameworks: Express, Nest.js
- Mobile: React Native
- Package managers: npm, yarn
- Build automation tools(task runner): Webpack, Grunt
  <script>で一々 *.js を読み込んでいると遅いので，依存関係順に統合. .js だけではなく .css 等 HTML で読み込むファイルは統合される
- Testing tools: Jest, Storybook
- Linter: ESLint
- Transpilers: Babel(ES6, React)
- Alt JS: TypeScript, CoffeeScript, Vanilla JS

# History

## ECMAScript

ES3(1999)
- regular expression
- new control statements
- exception handling

ES5(2009)
- iteration functions(map, reduce, filter, forEach)
- JSON
- accessor(getter and setter)
- better reflection and object properties

ES6(ES2015)
- block scope(let, const)
- arrow function
- class
- module(CommonJS => ES modules)
- template literal
- spread operator
- default value
- de-structuring assignment
- rest parameter
- symbol
- generator function

ES2017
- promise, async/await

以降は`Living Standard`という形で毎年更新されるようになった

## Frontend history

- Module Bundler
  - Necessary: *.js ファイルの読み込み負荷増大
  - Solution: Webpack で .js, .css を依存関係順に統合
- UI Library
  - Necessary: jQuery の DOM 操作の負荷増大．状態を管理できない
  - Solution: Virtual DOM を有する React等の登場
- SPA(Single Page App): HTML が一つだけのアプリケーション
  - Necessary: HTML のレンダリング負荷増大
  - Solution: SPA Router でページ遷移を管理．ブラウザからサーバへの HTML Request が一回で済むから高速．負荷軽減
    1. 宣言的 UI: DOM Tree 構造を Object 形式で宣言して可読性を上げる
    2. Virtual DOM: Dom Tree を Object で疑似的に表現して JavaScript のランタイム上で管理
    3. 差分検知: Virtual DOM の差分を比較


## Surroundings history

- 1993: The Mosaic web browser was released
- 1995: first shipped called `LiveScript` as part of Navigator beta
- 1996: Microsoft release JScript which is similar to JavaScript
  => cause cross browser problem that make developers confuse
- 1997: ECMA Script1 was released by Ecma International
- 1998: ECMA Script2 was released
- 1999: ECMA Script3 was released
- 2000: Internet Explorer dominant about 95% in the browser market
- 2004: FireFox was released by Mozilla ex-Netscape
- 2005: `AJAX` appeared. It provided async procession
  => affect jQuery
- 2008: Google Chrome with just-in-time compilation was released
- 2009: ECMA Script5 was released
- 2009: `Node.js` and `npm` was released by Ryan Dahl
- 2015: `ECMA Script6` was released

## Browser history

- 1993: NCSA Mosaic
- 1994: Netscape Navigator
- 1995: Internet Explorer
- 1996: Opera
- 2003: Safari
- 2004: Firefox
- 2008: Google Chrome


# Syntax

'use strict'はコードの安全性を確保するために ES5 から実装された機能であり、古く安全でない構文を禁止する

## Data Type

```js
// primitive type
Number: 12
BingInt: 9007199254740992n // ES2020. it is over 2^53-1
String: 'foo' // 'str' or "str"
Symbol: Symbol('str')
Undefined: undefined
Null: null
Boolean: true, false

// object type
Object: {key: "value"}
Array: [1, 2] // Objectから派生. Array = { 0: 'value1', 1: 'value2', ... }
Function: function() {}
RegExp: /[a-z]/
```

## escape character

```js
\n: new line
\t: tab
\b: backspace
\0: null
\': single quote
\": double quote
\\: backslash
```

## RegExp type

```js
\d: digit(Arabic numeral)
\w: [A-Za-z0-9_]
\s:[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
```

## type cast

```js
// check
typeof x;

// to int
parseInt(x);
Number(x);

// to float
parseFloat(x);

// to string
String(x);

// to boolean
Boolean(x);

// to array
Array(1, 2); // [1, 2]

// template literal
console.log(`${x}`);
```

## reserved words

```js
break       case    catch   continue    default
delete      do      else    finally     for
function    if      in      instanceof  new
return      switch  this    throw       try
typeof      var     void    while       with
const       let
```

## copy variables

```js
// 値渡し
let x = 3;
let y;
y = x;
x = 1;
console.log(y); // 3

// 参照渡し(ポインタ渡し) = [x,y], {k:"value"}
let a1 = [1, 2, 3];
let a2;
a2 = a1;
a1[0] = "a";
console.log(a2); // ["a",2,3]
```

## Variable

if you declare variables without var or let, variables are in global scope

- const: ES2015. declare constant value. 基本的に参照透過性(変数が immutable であること)を担保するために変数宣言時は const を使うのがベター
- let: ES2015. declare block scope value. ループ中の変数など途中で変化する必要がある変数に用いる

Flow

1. 宣言: let x;
2. 代入: x = 3;
3. 評価: 変数に格納された値を参照する行為

```js
// you can declare and reassign again
var foo = null;

// block scope. you must not declare again
let bar = null;

// you must not reassign again. it is CONSTANT VALUE. it is the most general way
const baz = null;
```

falsy variables

- false
- undefined
- null
- 0
- 0n
- NaN
- ""

### Operand

単項、二項、三項の演算子が存在する

```js
代入演算子: =
剰余演算子: %
冪乗演算子: ** // ES2016
increment: ++ // 単項演算子
decrement: --
厳密等価演算子: === // 値とデータ型も同じ. あるいは値と参照変数も同じ
厳密不等価演算子: !== // 値とデータ型も同じ. あるいは値と参照変数も同じ
等価演算子: == // 値のみ評価. 型違いの場合は暗黙的に型変換する
不等価演算子: != // 値のみ評価. 型違いの場合は暗黙的に型変換する
論理積: && // and
論理和: || // or
否定： ! // not
```

## control flows

### if condition

```js
const height = 162;

if (height > 160) {
  console.log("good !");
} else if (height > 170) {
  console.log("great !!");
} else {
  console.log("soso ...");
}

// short conditionals(one liner)
height > 160 ? console.log("good !") : console.log("bad");
```

### switch case condition

※break を入れないと他の条件も実行するので注意

```js
const signal = "yellow";

switch (signal) {
  case "red":
    console.log("stop");
    break; // defaultにいくのを防止
  case "blue":
    console.log("go");
    break;
  case "yellow":
    console.log("caution");
    break;
  default: // = else
    console.log("no signal");
    break;
}
```

## Loop

### for loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// forEach
let array = ["a", "b", "c"];
array.forEach(
  (e, index) => console.log(e, index) // callback func
);

// for in // 要素の処理をする際はあまり推奨されていない
let array = ["a", "b", "c"];
for (let i in array) {
  // indexが返される
  console.log(array[i]);
}

obj = { k1: "value1", k2: "value2" };
for (let k in obj) {
  console.log(obj[k]);
}

// for of. ES2015. iterableに対して用いる
array = ["a", "b", "c"];
for (let e of array) {
  // elementが返される
  console.log(e); // 'a', 'b', 'c'
}
```

### while loop

- break: it makes loop end
- continue: it makes loop skip following lines

```js
let i = 0; // counter variable

while (i < 10) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// do while
do {
  // 初回は必ず実行
  console.log(i);
} while (i < 10);
```

## exception handling

- tyy: start exception block
  - throw: raise Error
- catch: exception
- finally: exception にかかわらず、常に出力

```js
let a = ["a", true, 0];

for (let i in a) {
  try {
    if (a[i] === 0) {
      throw new Error("0で割らないで"); // raise
    }
    console.log(3 / a[i]);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("常に出力");
  }
}
```

## Function

- return: return variables

```js
// function literal
function hello(name) {
  console.log(`hello ${name}`);
  return name;
}

// function formula. like to assign value
let add = function (a, b) {
  return a + b;
};

// arrow function. ES2015. all below are equivalent
function add(a, b) {
  return a + b;
}
const add = (a, b) => {
  // omit function
  return a + b;
};
const add = (a, b) => a + b; // omit function, { return }

// spread operator. ES2015
let func = (...args) => {
  console.log(args); // argsArray [arg1, arg2, ..., arg n]
};

// default parameters. ES2015
function sayHi(name = "hitoe") {
  // const name = name || 'hitoe' // ES2015以前はOR演算子でデフォルト引数を指定していた
  return "hello " + name;
}
sayHi(); // hello hitoe

// object method. they are equivalent
const obj = {
  someMethod: function () {
    // function formula
    return "it is method";
  },
};
const obj = {
  someMethod() {
    return "it is method";
  },
};
```

## Class

従来は prototype で関数として実装していた。ES6 から class が登場。

```js
class Human {
  // 先頭は大文字
  classProp = "This is class prop"; // クラス変数

  constructor(name, age) {
    // インスタンス変数
    this.name = name; // this = インスタンス
    this.age = age;
  }

  static sayHello() {
    // クラスメソッド
    console.log("say hello");
  }

  sayPokemon(pokemon) {
    // インスタンスメソッド
    console.log(`say ${pokemon}`);
  }
}

taro = new Human("taro", 7); // newでインスタンス生成
```

### inheritance

```js
class PokemonMaster extends Human {
  breedPokemon() {
    console.log("ポケモンを育てるよ");
  }
}
```

### accessor

クラスオブジェクトにおいて、プロパティの様に振る舞うメソッド

```js
class Triangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get calc() {
    return (this.width * this.height) / 2;
  }

  set props(obj) {
    this.width = obj.width;
    this.height = obj.height;
  }
}
```

# Object.method

## String

```js
let s = "susi,zume,geki,dai";

s.split(","); // , でsplit to array
s.slice(3, 7); // start endでslice
s.search("s"); // 文字位置検索
s.replace("s", "t"); // replace
s.length; // = len(s)
s.toUpperCase();
```

## Math

```js
Math.random(); // 0 <= x < 1
Math.abs(-7); // 7
Math.pow(2, 4); // 16
Math.ceil(3.4); // 4
Math.floor(7.7); // 7
Math.round(3.1); // 3
Math.sqrt(16); // 4
Math.PI; // 3.14...
Math.E; // 2.7...
```

## Array

```js
let arr = [1, 2, 3];

arr.map((e) => e * 2); // [1, 4, 6]
arr.filter((e) => e === 2 || e === 3); // [2, 3]
arr.concat(arr); // [1, 2, 3, 1, 2, 3]
arr.every((e) => e < 5); // true
arr.some((e) => e === 1); //true
arr.includes(1); // true
arr.join(""); // '123'
arr.find((e) => e >= 2); // 2. only return first element
arr.slice(1, 3); // [2, 3]
arr.splice(0, 2); // [1, 2]
arr.reduce((total, current) => total + current); // 6 = sum()
arr.reverse(); // [3, 2, 1]
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.unshift(0); // [0, 1, 2, 3]
arr.shift(); // [1, 2, 3]

// destructuring
const strArr = ["red", "blue", "green"];
const [first, second, third] = strArr;
// first = 'red', second = 'blue', third = 'green'

// destructuring with spread syntax
const [a, ...newArr] = [1, 2, 3, 4]; // a = 1, neWarr = [2,3,4]
const arr2 = [...arr, 4]; // arr2 = [1,2,3,4]
```

## Object

```js
obj = { a: 1, b: 2, c: 3 };
// dot
obj.a; // 1
// bracket
obj["b"]; // 2

obj.hasOwnProperty(1); // true
Object.keys(obj); // ['a', 'b', 'c']
Object.values(obj); // [1, 2, 3]
Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]
Object.freeze(obj); // objのconst化

// destructuring
const user = {
  name: "hitoe",
  age: 16,
  works: {
    title: "Machine Human",
  },
};

const { name, age } = user; // name = 'hitoe', age = 16
const {
  works: { title },
} = user; // title = 'Machine Human'

// destructuring with spread syntax
const newUser = {
  ...user,
  job: "engineer",
};
Object.keys(newUser); // ['name', 'age', 'works', 'job']
```

## Date

```js

```

# Modules

## commonJS

how to export

```js
module.exports = someModule;
```

how to import

```js
const package = require("someModule");
```

## ES6 Modules

named export require surrounding modules by {} when you export and import

- how to export
  - named export: you can't rename modules
  - export default: you can rename modules and export only one module

```js
// named export
const a = 1;
const b = 2;

export { a, b };

// export default
export default a;
```

how to import

```js
// named import
import { a, b } from "./someModule";

// import default
import a from "./someModule";
```

# Asynchronous processing

順次実行の構造型プログラミングの法則を壊すサーバサイドメインの処理.`Promise`という後で実オブジェクトを渡すための仮のオブジェクトを発行することによって実現する. サーバの`メインスレッド`領域を中断させないように考案された仕組み

JS は fs など標準で非同期処理となる非同期型関数を多く保有している

## Promise Object(ES2015)

Promise state

- resolve: success
- reject: failure
- pending: initial state

Promise で処理の状態を保持し、`コールバック関数`で resolve, reject それぞれの状態になった時の処理を記述できる

```js
// resolveのみの処理

console.log("start");

function puts(str) {
  // return promise instance. callback関数のresolve()は後で定義
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(str);
    }, 1000);
  });
}

// callback関数. thenの引数は非同期関数の戻り値
puts("async").then(function (result) {
  // resolve(str)の内容. str = result
  return console.log(result);
});

console.log("end");
// start -> end -> async
```

resolve, reject 両方の処理を記述

```js
const promise = new Promise((resolve, reject) => {
  // 非同期でresolveする
  setTimeout(() => {
    resolve();
    // すでにresolveされているため無視される
    reject(new Error("エラー"));
  }, 16);
});
promise.then(
  () => {
    console.log("Fulfilledとなった");
  },
  (error) => {
    // この行は呼び出されない
  }
);
```

## Promise chain

コールバックで返した値を次のコールバックへ引数として渡す

```js
Promise.resolve(1)
  .then((value) => {
    console.log(value); // => 1
    return value * 2;
  })
  .then((value) => {
    console.log(value); // => 2
    return value * 2;
  })
  .then((value) => {
    console.log(value); // => 4
    // 値を返さない場合は undefined を返すのと同じ
  })
  .then((value) => {
    console.log(value); // => undefined
  });
```

## async/await (ES2017)

async function という常に Promise インスタンスを返す関数. resolve, reject の state の記載を省ける. 非同期処理を同期処理のように記述可能. Promise.then()の`コールバック地獄`を解消するために考案された

```js
async function doAsync(what) {
  return what;
}

// コールバック関数
doAsync("hoge").then((val) => {
  console.log(val);
});

// 以下のPromise記法と同義
function doAsync(what) {
  return new Promise((resolve) => {
    resolve(what);
  });
}

doAsync("hoge").then((val) => {
  console.log(val);
});
```

await はコールバック関数の省略記法

```js
async function asyncMain() {
  const value = await Promise.resolve(42);
  // コールバック関数
  console.log(value); // => 42
}
asyncMain(); // Promiseインスタンスを返す

// 以下のthenを用いたコールバック関数と同義
function asyncMain() {
  return Promise.resolve(42).then((value) => {
    console.log(value); // => 42
  });
}
asyncMain(); // Promiseインスタンスを返す
```

# Browser Object

windowObject から以下のような階層構造を持つ

- window(global)
  - screen
  - location(URL)
  - navigation
  - history
  - document(HTML source)
    - anchors
    - images
    - forms
      - elements
        - Button
        - CheckBox
        - FileUpload
        - Password
        - Radio
        - Reset
        - Submit
        - Text
        - Textarea
        - Select
          - options

## window

- methods: popup 系の object. render する前に呼び出される
  - alert(): popup の表示
  - confirm(): y/n の確認, y = true, n = false を返す
  - prompt(): user input popup

### localStorage

**The keys and values stored** with localStorage are always in the UTF-16 DOMSting format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings

syntax looks like Firebase

```js
// access
const myStorage = window.localStorage;
// set
localStorage.setItem("key", "value");
// get
localStorage.getItem("key"); // return value
// delete
localStorage.removeItem("key");
// clear
localStorage.clear();
```

## location

- methods:
  - reload(): 再読み込み = f5
  - replace(URL): ページ遷移 = a タグ
- props:
  - pathname: URL の path
  - port
  - protocol: https://みたいな
  - href: location.href = URL = location.replace(URL)

## document

https://developer.mozilla.org/en-US/docs/Web/API

### file handling

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

// event handler
function handleFiles() {
  const fileList = this.files;
  console.log(fileList);
  for (let e of fileList) {
    console.log(e);
  }
}
```

# DOM(DocumentObjectModel)

クライアントサイド(ブラウザ)で利用する要素をツリー構造で表現した仕様. W3C(World Wide Web Consortium)によって標準化されている. 要素を node と表現する

- node: variation of node

  - element node
  - attribute node
  - text node

- node tree
  - parent node
    - older brother node
    - current node
    - younger brother node
      - first child node
        ...
      - last child node

## change node element

```js
// get directly
document.getElementById("id");
// listなのでfor ofで要素取得. list.item(i)で個別取得可能
document.getElementsByTagName("tagName");
document.getElementsByClassName("className");

// selectorによる統一記法
document.querySelector("#id");
document.querySelectorAll(".class");
document.querySelectorAll("selector[attr]");

// get and set attr
element.getAttribute("attr");
element.setAttribute("attr", "value");

// change text in node element
element.textContent = "newText";
element.innerHTML = "newText";

// create
document.createElement("tag");

// set, update, delete like array object
parentNode.appendChild(element);
parentNode.replaceChild(element);
parentNode.removeChild(element);
```

## change CSS

```js
// change property
element.style.property = "value";
// change class
element.className = "className";
```

## event listener

set multi event listener for one event in node element

```js
// syntax
eventTarget("event", eventHandler, options);

// example
element.addEventListener("event", (e) => {
  callbackFunc();
});
```
