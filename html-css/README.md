
# HTML5(HyperTextMarkupLanguage)

- 言語というよりはWeb上のドキュメントに課した仕様
- W3Cが仕様策定している
- HTTPとURLによってWeb上のあらゆるドキュメントと繋がることが可能

WorldWideWeb = HTML + HTTP + URL

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

config values in tag

ex: attribute(tag1, tag2, ...): description

## meta

- charset(meta, script): declare the character encoding
- class: to apply with CSS, JavaScript
- id: it is unique value to apply with CSS, JavaScript
- alt(img, input): alternative text in case contents can't be displayed
- autoplay(audio, video): auto play contents

### hyper text link

- href(a, link): the URL of a linked resource
- rel(a, link): specify relationship. ex, stylesheet
- src(iframe, img, script, video): URL of the embeddable content
- target(a,form): _blank = by new tab

### form

- action(form): URL submitted user input data to
- method(form): specify HTTP method GET or POST
- for(label): to id(input)
- form(input, button, fieldset, keygen, select, label): specify form
- name(input, button, fieldset, keygen, select, label): used by the server to identify the field in form submits
- placeholder(input, textarea): provide hint value on loading
- maxlength(input, textarea): define the maximum number of characters
- minlength(input, textarea): define the minimum number of characters
- value: define default value to send server
- type: [button, checkbox, color, date, email, file, hidden, image, number, password, radio, range, reset, submit, tel, text] => (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### embed

- height(iframe, img, input): contents height
- width(iframe, img, input): contents width

### value state

- checked(input, command): turn on checked on page load
- disabled(input, button, fieldset, keygen, select): disable to operate data
- hidden: hidden
- required: validate if there is no value
- selected(option): turn on selected on page load

### textarea

- cols(textarea): cols
- rows(textarea): rows

### meter

- max(input, meter): max number
- min(input, meter): min number


## global event attributes

event attribute fire JavaScript when user make event
attribute名の接頭辞にonが付く

### form events

- onblur: fire the moment that the element loses focus
- onfocus: fire the moment that the element gets focus
- onchange: fire the moment that the element is changed
- oninput: 
- oninvalid: 
- onselect: 
- onsubmit: 

### keyboard events

- keydown: fire every keydown
- keyup: fire every keyup

### mouse

- onclick: 
- ondblclick: 
- onmouseover: 
- onmousedown: like click
- ondrag: 

### clipboard

- oncopy: 
- oncut: 
- onpaste: 


# HTTP(HyperTextTransferProtocol)

- L7 protocol
- client request, then server response

## HTTP request

request contains below

- HTTP version type
- URL
- HTTP method
- request headers
- HTTP body(optional)

### HTTP version

- HTTP/0.9: 1991
- HTTP/1.0: 1996
- HTTP/1.1(main): 1997
- HTTP/2: 2015
- HTTP/3(draft): 2020

## HTTP response

response contains below

- HTTP status code
- response headers
- HTTP body(optional)

### HTTP status code

- 1xx information
- 2xx success
- 3xx redirection
- 4xx client error
- 5xx server error

### response headers

data type is key-value

- version, status code
- content-type
- date
- server
- expires
- set-cookie
- x-xss-protection


# URL(UniformResourceLocator)

URL is unique resource on the Web

URL = Scheme(Protocol) + Domain Name + Port + Path + Params + Anchor

ex: http://www.example.com:80/path/src/index.html?key=value#somewhere



