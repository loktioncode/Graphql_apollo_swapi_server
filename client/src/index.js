import React from "react";
import ReactDOM from "react-dom";
import MovieCards from "./components/People";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// Styles
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const client = new ApolloClient({ uri: "http://localhost:5001/graphql" });

function App() {
  return (
    <ApolloProvider client={client}>
      <People />
    </ApolloProvider>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);