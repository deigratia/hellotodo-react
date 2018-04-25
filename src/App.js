import React, { Component } from 'react';
//import logo from './logo.svg';
//import './index.css';
import home from "./pages/home";
import TodoList from "./pages/TodoList";
import About from "./pages/about";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class App extends Component {

  //   //let txt=this.props.txt
  constructor(props) {
      super(props);
      this.state = {
        collapsed: true
      };
      this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return (
        <Router>
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/todolist">Todo List</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <br />
          
          <Route  exact path="/" component={home} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/about" component={About} />
        </div>
        </Router>
      );
    }
  }
export default App;
