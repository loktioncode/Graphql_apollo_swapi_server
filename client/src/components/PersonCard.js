import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";


const PersonCard = ({ name, gender, mass, homeworld, height }) => (
  <Card  style={{
    margin: "20px",
    
  }}>
  <Card.Content header={name} textAlign="center" />
  <Card.Content
    style={{
      height: "200px",
      backgroundImage: `url(https://cdn.pixabay.com/photo/2017/05/13/15/18/dear-2309801_1280.jpg)`,
      backgroundSize: "cover",
    }}
  >
    <Card.Description style={{ color: "white" }}>
      <div>Name: {name}</div>
     
      <div> Height {height}</div>
     <div>  gender: {gender}</div>
      <div>  mass: {mass} </div>
      <div>  homeworld: {homeworld} </div>
   
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <Icon name="money bill alternate outline" />
    
    <Button color="yellow" inverted floated="right">
      View Charecter
    </Button>
  </Card.Content>
</Card>
  
);

export default PersonCard;
