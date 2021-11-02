
# JavaScript6(JavaScript ECMA Script6)

JavaScript was released by the Mosaic web browser.

JavaScript has features below
  - curly-bracket syntax {}
  - dynamic typing
  - prototype-type-based OOP =>
  - class-based OOP(ES6)
  - first-class functions

JavaScript has APIs below
  - text
  - dates
  - regular expressions
  - standard data structures
  - DOM(DocumentObjectModel)

## ecosystem

front-end frameworks: React, Angular, Vue, jQuery
back-end runtime: Node
frameworks for mobile: React Native
package managers: npm, yarn
build automation tools: Webpack, Grunt
testing tools: Jest
linter: ESLint
transpilers: Babel
alt JS: TypeScript

## history

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
  - promise, async/await(ES2017)
  - module(CommonJS => ES modules)
  - template literal
  - spread operator
  - default value
  - de-structuring assignment
  - rest parameter
  - symbol
  - generator function

- 1993: The Mosaic web browser was released
- 1995: first shipped called LiveScript as part of Navigator beta
- 1996: Microsoft release JScript which is similar to JavaScript
  => cause cross browser problem that make developers confuse
- 1997: ECMA Script1 was released by Ecma International
- 1998: ECMA Script2 was released
- 1999: ECMA Script3 was released
- 2000: Internet Explorer dominant about 95% in the browser market
- 2004: FireFox was released by Mozilla ex-Netscape
- 2005: AJAX appeared. It provided async procession
  => affect jQuery
- 2008: Google Chrome with just-in-time compilation was released
- 2009: ECMA Script5 was released
- 2009: Node.ja and npm was released by Ryan Dahl
- 2015: ECMA Script6 was released

### browser history

- 1993: NCSA Mosaic
- 1994: Netscape Navigator
- 1995: Internet Explorer
- 1996: Opera
- 2003: Safari
- 2004: Firefox
- 2008: Google Chrome


# Syntax

'use strict'はコードの安全性を確保するためにES5から実装された機能である。

## Data Type

```js
number: 12
string: 'foo' // 'str' or "str"
undefined: undefined
null: null
boolean: true, false
array: [1, 2]
object: {key: "value"}
```

### reserved words

```js
break       case    catch   continue    default
delete      do      else    finally     for
function    if      in      instanceof  new
return      switch  this    throw       try
typeof      var     void    while       with
const       let
```

### copy variables
```js
// 値渡し
let x = 3;
let y;
y = x;
x = 1;
console.log(y); // 3

// 参照渡し(ポインタ渡し) = [x,y], {k:"value"}
let a1 = [1,2,3];
let a2;
a2 = a1;
a1[0] = "a";
console.log(a2); // ["a",2,3]
```

### variables

※関数内でvarやletを使わずに変数宣言するとglobal scopeになるので注意
また、letはblock scope内ではglobal scopeに影響を与えない

```js
// 再宣言あり変数
var foo = null;

// 再宣言なし変数
let bar = null;

// 再代入なし変数 = 定数
const HOGE = null;
```

### type cast

```js
// check
typeof(x)

// to int
parseInt(x)

// to float
parseFloat(x)

// to string
String(x)

// to boolean
Boolean(x)

// to array
Array(1,2) // [1, 2]

// 文字列フォーマット
console.log(`${x}`)
```

### Operand

```js
型付き等号: === // 値とデータ型も同じ
型付き不等号: !== // 値とデータ型も同じ
等号: == // 値のみ評価
不等号: != // 値のみ評価
論理積: && // and
論理和: || // or
否定： ! // not
```

## control flows

### if 条件分岐

```js
let height = 162

if (height > 160) {
  console.log("good !")
} else if (height > 170) {
  console.log("great !!")
} else {
  console.log("soso ...")
}

// 条件演算子
height > 160 ? console.log("good !") : console.log("bad");
```

### switch case 条件分岐

※breakを入れないと他の条件も実行するので注意

```js
let signal = "yellow";

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

### for loop

```js
for (let i=0; i < 10; i++) {
    console.log(i);
}

// for i in
array = ['a', 'b', 'c']
for (let i in array) { // indexが返される
    console.log(array[i]);
}

obj = {k1: "value1", k2: "value2"}
for (let k in obj) {
    console.log(obj[k]);
}

// forEach
array.forEach((e, index) => 
  console.log(e, index) // callback func
);

// for of
array = ['a', 'b', 'c']
for (let e of array) { // elementsが返される
    console.log(e); // 'a', 'b', 'c'
}
```

### while loop

```js
let i = 0 // counter

while (i < 10) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// do while
do { // 初回は必ず実行
  console.log(i);
} while (i < 10)
```

### try exception handling

```js
let a = ['a', true, 0];

for (let i in a) {
  try {
    if (a[i] === 0) {
      throw new Error("0で割らないで") // raise
    }
    console.log(3 / a[i]);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("常に出力")
  }
}
```

## functions

```js
// 関数リテラル型
function hello(name) {
  console.log(`hello ${name}`);
  return name;
}

// 関数式 変数代入型
let add = function(a, b) {
  return a + b;
}

// アロー関数 = function + returnの省略
let add = (a, b) => (a+b);

// spread operator
let func = (...args) => {
  console.log(args) // argsArray
}
```

## classes

従来はprototypeで関数として実装していた。ES6からclassが登場。

```js
class Human { // 先頭は大文字
  classProp = 'This is class prop'; // クラス変数

  constructor(name, age) { // インスタンス変数
    this.name = name; // this = インスタンス
    this.age = age;
  }

  static sayHello() { // クラスメソッド
    console.log('say hello');
  }

  sayPokemon(pokemon) { // インスタンスメソッド
    console.log(`say ${pokemon}`);
  }
}

taro = new Human('taro', 7); // newでインスタンス生成
```

### inheritance

```js
class PokemonMaster extends Human {
  breedPokemon() {
    console.log('ポケモンを育てるよ')
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
    return this.width * this.height / 2;
  }

  set props(obj) {
    this.width = obj.width;
    this.height = obj.height;
  }
}
```

## object.method

### String

```js
let s = 'susi,zume,geki,dai'

s.split(',') // , でsplit to array
s.slice(3, 7) // start endでslice
s.search('s') // 文字位置検索
s.replace('s', 't') // replace
s.length // = len(s)
s.toUpperCase()
```

### Math

```js
Math.random() // 0 <= x < 1
Math.abs(-7) // 7
Math.pow(2, 4) // 16
Math.ceil(3.4) // 4
Math.floor(7.7) // 7
Math.round(3.1) // 3
Math.sqrt(16) // 4
Math.PI // 3.14...
Math.E // 2.7...
```

### Array

```js
let arr = [1, 2, 3]

arr.map(e => (e*2)) // [1, 4, 6]
arr.filter(e => (e === 2 || e === 3)) // [2, 3]
arr.concat(arr) // [1, 2, 3, 1, 2, 3]
arr.every(e => e < 5) // true
arr.some(e => e === 1) //true
arr.includes(1) // true
arr.join('') // '123'
arr.find(e => e >= 2) // 2. only return first element
arr.slice(1,3) // [2, 3]
arr.splice(0,2) // [1, 2]
arr.reduce((total, current) => total + current) // 6 = sum()
arr.reverse() // [3, 2, 1]
arr.push(4) // [1, 2, 3, 4]
arr.pop() // [1, 2, 3]
arr.unshift(0) // [0, 1, 2, 3]
arr.shift() // [1, 2, 3]

let [a, b, ...arr] = [1,2,3,4,5] // a = 1, b = 2, arr = [3,4,5]
```

### Object

```js
obj = {1: 'a', 2: 'b', 3: 'c'}

obj.hasOwnProperty(1) // true
Object.freeze(obj) // objのconst化
```

### Date

```js

```

## module

ES moduleでは、exportする時もimportする時も{}で囲う
exportの方法は[named export, export default]があり、export defaultは１つの値を出力する

```js
const a = 1;
const b = 2;

export { a, b }
```


# asynchronous processing

順次実行の構造型プログラミングの法則を壊すサーバサイドメインの処理.**Promise**という後で実オブジェクトを渡すための仮のオブジェクトを発行することによって実現する. サーバの**メインスレッド**領域を中断させないように考案された仕組み

JSはfsなど標準で非同期処理となる非同期型関数を多く保有している

## Promise (ES2015)

Promise state
- resolve: success
- reject: failure
- pending: initial state

Promiseで処理の状態を保持し、**コールバック関数**でresolve, rejectそれぞれの状態になった時の処理を記述できる

```js
// resolveのみの処理

console.log('start');

function puts(str) {
    // promiseオブジェクトを返す. callback関数のresolve()は後で定義
    return new Promise(function(resolve) {
        return setTimeout(function() {
            return resolve(str);
        }, 1000);
    });
}

// callback関数. thenの引数は非同期関数の戻り値
puts('async').then(function(result) {
    // resolve(str)の内容. str = result
    return console.log(result);
});

console.log('end');
// start -> end -> async
```

resolve, reject両方の処理を記述

```js
const promise = new Promise((resolve, reject) => {
    // 非同期でresolveする
    setTimeout(() => {
        resolve();
        // すでにresolveされているため無視される
        reject(new Error("エラー"));
    }, 16);
});
promise.then(() => {
    console.log("Fulfilledとなった");
}, (error) => {
    // この行は呼び出されない
});

```

### Promise chain

コールバックで返した値を次のコールバックへ引数として渡す

```js
Promise.resolve(1).then((value) => {
    console.log(value); // => 1
    return value * 2;
}).then(value => {
    console.log(value); // => 2
    return value * 2;
}).then(value => {
    console.log(value); // => 4
    // 値を返さない場合は undefined を返すのと同じ
}).then(value => {
    console.log(value); // => undefined
});
```

## async/await (ES2017)

async functionという常にPromiseインスタンスを返す関数。resolve, rejectのstateの記載を省ける。非同期処理を同期処理のように記述可能

```js
async function doAsync(what) {
    return what;
};

// コールバック関数
doAsync('hoge').then(val => {
    console.log(val);
});

// 以下のPromise記法と同義
function doAsync(what) {
    return new Promise((resolve) => {
        resolve(what);
    });
};

doAsync('hoge').then(val => {
    console.log(val);
});
```

awaitはコールバック関数の省略記法

```js
async function asyncMain() {
    const value = await Promise.resolve(42);
    // コールバック関数
    console.log(value); // => 42
}
asyncMain(); // Promiseインスタンスを返す

// 以下のthenを用いたコールバック関数と同義
function asyncMain() {
    return Promise.resolve(42).then(value => {
        console.log(value); // => 42
    });
}
asyncMain(); // Promiseインスタンスを返す
```

# browser object

windowObjectから以下のような階層構造を持つ

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

- methods: popup系のobject. renderする前に呼び出される
  - alert(): popupの表示
  - confirm(): y/nの確認, y = true, n = falseを返す
  - prompt(): user input popup

### localStorage

**The keys and values stored** with localStorage are always in the UTF-16 DOMSting format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings

syntax looks like Firebase

```js
// access
const myStorage = window.localStorage;
// set
localStorage.setItem('key', 'value');
// get
localStorage.getItem('key'); // return value
// delete
localStorage.removeItem('key');
// clear
localStorage.clear();
```


## location

- methods: 
  - reload(): 再読み込み = f5
  - replace(URL): ページ遷移 = aタグ
- props: 
  - pathname: URLのpath
  - port
  - protocol: https://みたいな
  - href: location.href = URL = location.replace(URL)


## document

https://developer.mozilla.org/en-US/docs/Web/API

### file handling

```js
const inputElement = document.getElementById('input');
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



## DOM(DocumentObjectModel)

クライアントサイド(ブラウザ)で利用する要素をツリー構造で表現した仕様. W3C(World Wide Web Consortium)によって標準化されている. 要素をnodeと表現する

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

### change node element

```js
// get directly
document.getElementById('id');
// listなのでfor ofで要素取得. list.item(i)で個別取得可能
document.getElementsByTagName('tagName');
document.getElementsByClassName('className');

// selectorによる統一記法
document.querySelector('#id');
document.querySelectorAll('.class');
document.querySelectorAll('selector[attr]');

// get and set attr
element.getAttribute('attr');
element.setAttribute('attr', 'value');

// change text in node element
element.textContent = 'newText';
element.innerHTML = 'newText';

// create
document.createElement('tag');

// set, update, delete like array object
parentNode.appendChild(element);
parentNode.replaceChild(element);
parentNode.removeChild(element);
```

### change CSS

```js
// change property
element.style.property = 'value';
// change class
element.className = 'className';
```

### event listener

set multi event listener for one event in node element

```js
element.addEventListener('event', e => {
  callbackFunc();
})
```

