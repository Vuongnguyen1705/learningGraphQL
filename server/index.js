import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import mongoose from 'mongoose';
//load schema and resolver
import typeDefs from './src/schema/schema.js';
import resolvers from './src/resolver/resolver.js';
import mongoDataMethod from './src/api/index.js';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({mongoDataMethod}),
});

//connect db
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/learningGraphQL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected');
  } catch (error) {
    console.log('connect db failed', error);
    process.exit();
  }
};
connectDB();
//start server
const startServer = async () => {
  await server.start();
  server.applyMiddleware({app});
};

startServer();

app.listen({port: 4000}, () => {
  console.log(`server ready http://localhost:4000${server.graphqlPath}`);
});
