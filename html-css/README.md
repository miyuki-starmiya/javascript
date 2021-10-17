
# HTML5(HyperTextMarkupLanguage)

- 言語というよりはWeb上のドキュメントに課した仕様と言える
- HTTPとURLによってWeb上のあらゆるドキュメントと繋がれる

## history

Web1.0の基となるHyperTextSystemは1980年にTim Berners-LeeによってCERN向けに考案された. しかし、紆余曲折の結果1990年にCERNはWeb1.0の草稿を採用することはなかった. 

- HTML2: Nov 24, 1995
- HTML3: Jan 14, 1997
- HTML4: Dec 18, 1997
- HTML5: Oct 28, 2014
  - HTML5.1: Nov 1, 2016
  - HTML5.2: Dec 14, 2017

## tags

### metadata

HTMLのメタ情報を記述するもの

- head: contain title, scripts, link to CSS
- link: make link to CSS, favicon
- meta: specify charset, viewport, theme-color, description
- style: write CSS to HTML directly
- title: title
- body: part to write contents

### content section

- article: independent part
- aside: sidebar, call-out boxes
- header: header
- footer: footer
- h1: six levels of section headings. 1 to 6.
- main: main part
- nav: navbar, menu
- section: generic standalone part

### text content

identify text content

- div: separate part and add class attr
- hr: horizon
- p: paragraph. include br tag
- math: math formula

### list content

- ol: order list
  - li: list component

- ul: unordered list
  - li: list component

- dl: description list
  - dt: title
  - dd: description

### inline text semantic

- a: anchor element. create a hyperlink to other wab pages
- b: bold
- br: break line
- mark: mark text in yellow color
- ruby: ルビを振れる
  - rt: this is ruby
- s: strike through
- span: span text
- sub: 下付き文字
- sup: 上付き文字
- u: underline with red wave line

### image and multimedia

- audio: .mp3
- img: .png, .jpg
- video: .mp4
- track: audio + video
- svg: .svg

### embedded content

- iframe: nest sub browser window. embed another HTML page
- script: script

### table content

- table: table flame
  - thead: table head
    - tr: table row
      - th: table heading
      - td: table description
  - tbody: table body
    - tr: table row
      - th: table heading
      - td: table description
  - tfoot: table foot
    - tr: table row
      - th: table heading
      - td: table description

### form content

This is user input part

- form: form flame
  - fieldset: input areaを枠線で囲う
  - legend: fieldsetの凡例
  - input: user input part 
  - label: describe what to input data

- meter: show meter bar
- progress: progress bar

- select: selecting value part
  - optgroup: grouping values
    - option: value

- textarea: user input free
## attributes

tag内の設定変数

ex: attribute(tag1, tag2, ...): description

- alt(img, input): alternative text in case contents can't be displayed
- autoplay(audio, video): auto play contents
- charset(meta, script): declare the character encoding
- class: to apply with CSS, JavaScript
- id: it is unique value to apply with CSS, JavaScript

### hyper text link

- href(a, link): the URL of a linked resource


### form

- action(form): URL submitted user input data to
- for(label): to id(input)
- form(input, button, fieldset, keygen, select, label): specify form


### embed

- height(iframe, img, input): contents height
- width(iframe, img, input): contents width


### value state

- checked(input, command): turn on check on page load
- disabled(input, button, fieldset, keygen, select): disable to operate data
- hidden: hidden

### textarea

- cols(textarea): cols
- rows(textarea): rows

## global attributes

onclickとかのevent

# HTTP


# URL





