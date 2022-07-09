# nodejs

it is Server Side JS.

## Modules

export
```js:material.js
exports.foo = bar;
```

import
```js
const importFile = require('./material.js'); // obj
const foo = importFile.foo;
```

## Glossary
- thread model(Apache)
  1 thread for 1 request

`event loop`(Node.js)
  - store queue request by request
  - process in I/O layer
  - write in `Non-Blocking` to keep running queue loop

# Express

Express is a lightweight web application framework

## import

```shell
npm install express
# addition
npm install body-parser
npm install cookie-parser
npm install multer
```

```js
const express = require('express');
const app = express();
```

## routing

you can set HTTP method(GET, POST, DELETE)

```js
app.get('/route', (req, res) => {
  res.send('This is page contains');
})
```

## load static files

```js
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
})
```

## listen port

```js
const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('listen at http://%s:%s', host, port);
})
```


# JSON(JavaScript Object Notation)

- attention
  - cannot set last comma
  - surround key with ""
