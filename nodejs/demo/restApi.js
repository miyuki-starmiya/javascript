const express = require('express');
const app = express();
const fs = require('fs');

let user = {
  "user4": {
    "name": "hitoe",
    "password": "foo",
    "profession": "researcher",
    "id": 4
  }
}

// controller
app.get('/list_users', (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", 'utf-8', (err, data) => {
    console.log(data);
    res.end(data);
  });
})

// get query params
app.get('/:id', (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", 'utf-8', (err, data) => {
    let users = JSON.parse(data);
    let user = users["user" + req.params.id]
    console.log(user);
    res.end(JSON.stringify(user));
  })
})

app.post('/add_user', (req, res) => {
  fs.readFile(__dirname + "/" + "users.json", 'utf-8', (err, data) => {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    // render to client
    res.end(JSON.stringify(data));
  });
})

const server = app.listen(8081, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

