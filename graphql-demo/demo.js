var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hoge: String
  }
`);

var root = { hoge: () => 'Hello hoge!' };
var query = '{ hoge }';

graphql(schema, query, root).then((response) => {
  console.log(response);
});

