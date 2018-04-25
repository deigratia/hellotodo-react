import React from "react";
import "../index.css";

const Topic = ({ match }) =>  {
  return (
     <div>
      <h3>{match.params.person}</h3>
     <img
        src={require(`../images/${match.params.person}.jpg`)}
        alt="Smiley face"
        height="50"
        weight="50"
     />
      </div>
 );
}

export default Topic;
