
# Glossary

ES6(ES2015): ECMAScript6. JSのver6. ES5は2009年公開

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

### 予約語

```js
break       case    catch   continue    default
delete      do      else    finally     for
function    if      in      instanceof  new
return      switch  this    throw       try
typeof      var     void    while       with
const       let
```

### 変数のコピー
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

### 変数

```js
// 再宣言あり変数
var x = null;

// 再宣言なし変数
let x = null;

// 再代入なし変数 = 定数
const x = null;
```

### 型変換(cast)

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
等号: === // 値とデータ型も同じ
不等号: !==
論理積: && // and
論理和: || // or
否定： ! // not
```

## 制御フロー

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

### for 繰り返し

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

### while 繰り返し

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

### try 例外処理

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

## 関数

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
```

## クラス



## オブジェクトメソッド

### String

```js
let s = 'susi,zume,geki,dai'

s.split(','); // , でsplit to array
s.slice(3, 7) // start endでslice
s.search('s') // 文字位置検索
s.replace('s', 't') // replace
s.length // = len(s)
s.toUpperCase()
```

### Math

```js
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
arr.reverse() // [3, 2, 1]
arr.push(4) // [1, 2, 3, 4]
arr.pop() // [1, 2, 3]
arr.unshift(0) // [0, 1, 2, 3]
arr.shift() // [1, 2, 3]
```



# 非同期処理(asynchronous)

順次実行の構造型プログラミングの法則を壊すサーバサイドメインの処理。**Promise**という後で実オブジェクトを渡すための仮のオブジェクトを発行することによって実現する。サーバの**メインスレッド**領域を中断させないように考案された仕組み。

JSはfsなど標準で非同期処理となる非同期型関数を多く保有している。

## Promise (ES2015)

PromiseのState
- resolve: 成功
- reject: 失敗
- pending: 初期状態

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

### Promiseチェーン

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


# DOM(DocumentObjectModel)

クライアントサイド(ブラウザ)で利用する

```js
document.getElementById('#id');
document.querySelectorAll('.class');


```
