import React from 'react';
import './App.css';

class RegResults extends React.Component{
  state = {
           message: "",
           error: ""
          }
   
  async componentDidMount() {
    const postBody = {method:'POST', headers: {'Content-Type':
    'application/json'}, body: {email: this.props.uname,
    password:this.props.pass}}
    const response = await fetch('http://localhost:3001/register', postBody)
    await response.json()
      .then(
        data => this.setState({message:data.message}),
        error => {
          this.setState({ error: 'Unable to load Post' })
      })
  }
  
  
  render(){
    return(
    <p>{this.state.message}</p>
  )}
}

export default RegResults;
