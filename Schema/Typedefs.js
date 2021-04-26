const { gql }= require('apollo-server-express')

const typeDefs = gql `
  
type Person {
    name: String!
    gender: String
    height: String
    mass: String
    homeworld: String
  }

type Query {
    getAllPeople(page: String): [Person!]!
    Person(name: String!): Person!
}

`;

module.exports = {typeDefs};
