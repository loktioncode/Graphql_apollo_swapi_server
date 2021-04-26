const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./Schema/Typedefs')
const { resolvers } = require('./Schema/Resolvers')


const app = express()
const PORT = 5001
app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({app})

app.listen(PORT, () => console.log(`Apollo Graphql Server started on port ${PORT}`));


