import React from 'react';
import './App.css';
import RegResults from './RegResults';

class App extends React.Component{
  state = {
           isLoginDisplayed: false,  //{action: 'Browse'}
           isSearchDisplayed: false,
           areDetailsDisplayed: false,
           isHomeDisplayed: true,
           isRegResultsDisplayed: false,
           uname: "",
           pass: ""
          }

  handleChange = (event) => {
  const target = event.target;
  const name = target.name;
  this.setState({[name]: target.value});
  }

  doLogin = () => {
    var keys = Object.keys(this.state).filter(k => this.state[k]);
    this.setState({
      [keys]: false,
      isLoginDisplayed: true  
    });
  }

  register = () => {
    var keys = Object.keys(this.state).filter(k => this.state[k]);
    this.setState({
      [keys]: false,
      isRegResultsDisplayed: true
    });
  }

  render(){
  var addLoginForm = (
    <form id="loginform">
      <label>UserName</label>
      <input type="text" name="uname" onChange={this.handleChange} value={this.state.uname}/>
      <label>Password</label>
      <input type="text" onChange={this.handleChange} value={this.state.pass} name="pass"/>
      <button name="sub" onClick={this.register}>Submit</button>
    </form>
  )
  return (
    <div className="TitleBar">
      <b className="App-header">GMDB  </b>
      <button name='home'>Home</button>
      <button name='login' onClick={this.doLogin}>login</button>
      <input name='movieSearch'/>
      <button name='searchBtn'>Search</button>
      {
          this.state.isLoginDisplayed
          ? addLoginForm
          :this.state.isRegResultsDisplayed
          ? <RegResults uname={this.state.uname} pass={this.state.pass} />
          : <p> </p>
      }
    </div>
  );
  }
}

export default App;
