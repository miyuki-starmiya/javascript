
# HTML(MarkupLanguage)

- HTML5は○○年にリリースされた
- 言語というよりはWeb上のドキュメントに課した仕様と言える

## h1
## p

## a

## div
## span

## ol, ul

## table
## form

- attrs: 
  - name: formやinputを識別するID. これを元にvalueを参照する
  - action: valueの送信先URLを指定
  - method: GET / POSTでHTTPメソッドを指定

### input

- attrs:
  - name: formやinputを識別するID. これを元にvalueを参照する
  - placeholder: 未入力の状態で表示される値
  - required: 未入力であればvalidateする
  - value: valueを指定. checkbox, radio, hiddenの時に指定
  - type: input fieldの種類
    - checkbox
    - date: UIが古臭い笑
    - disabled: 入力不能にする. JSと組み合わせて入力順序を規定したりする
    - email
    - file: ファイルのアップロード
    - hidden: 暗黙的に送信する. valueを指定する必要あり
    - number
    - password
    - radio
    - reset: formタグ内の入力をすべてresetする
    - submit: valueがブラウザから表示される値になる
    - text: default

### label

- attrs: 
  - for: inputタグのidとbindされる
  - form: formタグのidとbindされる

### textarea
### select
### option

### link
### script
### meta

metaタグ内でHTML以外の言語が利用可能


# CSS(StyleSheet)

## import

```html: index.html
link rel="index.css"
```

## query-selector

- id = #
- class = .


