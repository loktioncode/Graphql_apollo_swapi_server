import React from "react";

const Card = ({ name, gender }) => (
  <div className="ui card">
    <div className="content">
      <div className="header">{name}</div>
      <div className="meta">
        <span className="date">Directed by {gender}</span>
      </div>
    </div>
  </div>
);

export default Card;
