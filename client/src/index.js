import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import People from "./components/People";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "semantic-ui-css/semantic.min.css";


const client = new ApolloClient({ uri: "http://localhost:5001/graphql" });

function App() {
  return (
    <BrowserRouter>
     <ApolloProvider client={client}>
      <People />
    </ApolloProvider>
  </BrowserRouter>
   
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);