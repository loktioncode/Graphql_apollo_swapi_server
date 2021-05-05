import React from "react";
import ReactDOM from "react-dom";
import MovieCards from "./MovieCards";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// Styles
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const client = new ApolloClient({ uri: "https://swapi.graph.cool" });

function App() {
  return (
    <ApolloProvider client={client}>
      <MovieCards />
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);