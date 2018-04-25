import React from "react";
import { Link, Route } from "react-router-dom";
import Topic from "../small/Topic";

const About = ({ match }) => {
  return(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/React`}>React</Link>
      </li>
      <li>
        <Link to={`${match.url}/Javascript`}>Javascript</Link>
      </li>
      <li>
        <Link to={`${match.url}/MongoDB`}>MongoDB</Link>
      </li>
    </ul>


    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
       exact
       path={match.url}
       render={() => <h3>Please choose your topic</h3>}
       />
  </div>
);
}

export default About;
