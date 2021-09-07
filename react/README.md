
コンポーネント指向のJSフレームワーク。

## JSX記法

- render()の第一引数は単一タグで記載する必要がある(divタグで囲う)
- class= は className=
- 閉じタグ無しはスラッシュ要 ex: <hr />
- 変数や関数は{}で囲う

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

- Component間の引数授与は**props**を使う


