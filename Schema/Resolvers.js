const fetch = require('node-fetch')

const BASE_URL = 'https://swapi.dev/api'


const resolvers = {
    Query:{
      getAllPeople: (_, { page }) => {
        if (page){
          console.log("ALL PEOPLE PER PAGE");
         return fetch(`${BASE_URL}/people/?page=${page}`).then(res => res.json()).then(json => json.results)
        }else{
          console.log("ALL PEOPLE");
          return fetch(`${BASE_URL}/people`).then(res => res.json()).then(json => json.results)
        }
        },
      Person: (_, {name}) =>{
        return fetch(`${BASE_URL}/people/?search=${name}`).then(res => res.json()).then(json => json.results[0])
        }
    }
}

module.exports = {resolvers};
