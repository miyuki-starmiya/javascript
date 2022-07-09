import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import schemas from './schemas';
import resolvers from './resolvers';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
});

const port = process.env.PORT || 4000;

const starter = async () => {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
};

starter();
