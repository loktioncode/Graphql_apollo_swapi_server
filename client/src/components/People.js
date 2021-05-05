import React, { Fragment } from "react";
import { Query, ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import Card from "./Card";

const query = gql`
 {
  getAllPeople{
    name
    mass
    height
    gender
    homeworld 
  }
}

`;

const People = ({ name }) => (
  <Fragment>
    <h1>Star Wars People</h1>
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          );
        if (error) return <p>Error :(</p>;
        return data.allFilms.map(props => (
          <Card {...props} key={props.episodeId} />
        ));
      }}
    </Query>
  </Fragment>
);

export default People;
