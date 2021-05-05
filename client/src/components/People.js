import React, { Fragment } from "react";
import { Query} from "react-apollo";
import gql from "graphql-tag";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import PersonCard from "./PersonCard";
import CircularNumber from "./Pagination";

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
  <div>
    
    <div style={{
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-around"
}} >
    <Fragment >
      
  
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          );
        if (error) return <p>Error :(</p>;
        return data.getAllPeople.map(props => (
          <PersonCard {...props} key={props.name} />
        ));
      }}
    </Query>
  </Fragment>

 </div>

 <div style={{
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"
}}>
    {
        Array.from({ length: 10 }, (_, k) => (
          <CircularNumber pagenum ={k} size={'big'}/>
        ))
      }

    </div>
  </div>
 
 
);

export default People;
