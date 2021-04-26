# Star Wars

> React, GraphQL, Apollo app that uses the Star Wars API to display start wars charecters

## Quick Start

```bash

# Server only (:5000)
# Graphiql - http://localhost:5000/graphql
npm run server

# Client Only
cd client && npm run start


```

## Simple query

```bash

# get people 
{
  getAllPeople{
    name
    mass
    height
    gender
    homeworld 
  }
}

# get one person
{
  Person(name: "R2-D2") {
    name
    mass
    gender
    homeworld
  }
}

# get people per page
{
  getAllPeople(page:"7"){
    name
    mass
    height
    gender
    homeworld 
  }
}





```

