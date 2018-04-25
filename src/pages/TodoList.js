import React, { Component } from 'react';
//import logo from './logo.svg';
import '../index.css';
import Output from "../small/Output";

class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: "This is App",
      todos:[],
      input:""
    };
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.removeItem=this.removeItem.bind(this);
  }

  handleClick() {
    if (this.state.input !== "") {
      this.setState(prevState => {
        return {
          todos: prevState.todos.concat(prevState.input),
          input: ""
        };
      });
    }
  }

  handleChange(event){
    let value = event.target.value;
    this.setState(()=>{
      return {input: value};
    });
  }

  removeItem(target_index) {
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter((todo, index) => {
          return index !== target_index;
        })
      };
    });
  }

  render() {
    //let txt=this.props.txt
    return (
      <div>
        <div className ="container">
          <h1 className="title">{this.state.txt}</h1>
        </div>
        <div className="container1">
        <input className="input" type="text" onChange={this.handleChange} value={this.state.input}></input>
        <button className="button" onClick={this.handleClick}>Add</button>
        </div>
        <div className="container2">
        <Output todos={this.state.todos} removeItem={this.removeItem} />
        </div>
      </div>
    );
  }
}

export default App;
