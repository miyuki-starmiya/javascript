
# Syntax

'use strict'はコードの安全性を確保するためにES5から実装された機能である。

## データ型

```js
文字列: string // 'str' or "str"
数値: number
undefined: undefined
null: null
真偽値: boolean // true or false
配列: [1, 2]
オブジェクト: {key: "value"}
```

## 予約語

```js
break       case    catch   continue    default
delete      do      else    finally     for
function    if      in      instanceof  new
return      switch  this    throw       try
typeof      var     void    while       with
const       let
```

## コピー
```js
// 値渡し
let x = 3;
let y;
y = x;
x = 1;
console.log(y); // 3

// 参照渡し = [x,y], {k:"value"}
let a1 = [1,2,3];
let a2;
a2 = a1;
a1[0] = "a";
console.log(a2); // ["a",2,3]
```

## 変数

```js
// 再宣言あり変数
var x = null;

// 再宣言なし変数
let x = null;

// 再代入なし変数 = 定数
const x = null;
```

### 型変換

```js
// 型調査
typeof x

// to string
String(x)

// to int
parseInt(x)

// to float
parseFloat(x)

// to boolean
Boolean(x)

// 文字列フォーマット
console.log(`${x}`)
```

### 演算子

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

for (let i in array) {
    console.log(array[i]); // indexが返される
}

obj = {k1: "value1", k2: "value2"}

for (let k in obj) {
    console.log(obj[k]);
}

// forEach
array.forEach((e, index) => console.log(e, index));
```

### while 繰り返し

```js
let i = 0

while (i < 10) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// 初回は必ず実施
do {
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
function hello(name) {
  console.log(`hello ${name}`);
  return name;
}

// 関数式
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
Math.pow(2, 4) //16
Math.ceil(3.4) // 4
Math.floor(7.7) // 7
Math.round(3.1) // 3
Math.sqrt(16) // 4
Math.PI // 3.14...
Math.E // 2.7...
```

### Array


