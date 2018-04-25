import React, { Component } from 'react';
//import logo from './logo.svg';
//import './index.css';
import home from "./pages/home";
import TodoList from "./pages/TodoList";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
   render() {
  //   //let txt=this.props.txt
     return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route  exact path="/" component={home} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
