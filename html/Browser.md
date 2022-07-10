
# Structure

[browser structure](https://speakerdeck.com/recruitengineers/browser-b45d3a59-af2b-449c-992e-fd7563745f80?slide=16)

1. User Interface
2. Browser Engine
3. Rendering Engine: HTML, CSS を Parse する
4. Other
  1. Network
  2. JavaScript Engine
  3. UI Backend


# Rendering Flows

1. サーバから HTML をロード
2. CSS, JS ファイルの参照を解析
3. HTML を Parse して DOM Tree を生成
4. CSS の Parse 後，CSSOM Tree を生成
5. Style, Layout, Paint を演算，適用
6. JavaScript の Parse を実行


