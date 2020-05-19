import React from 'react';

class Browse extends React.Component{
  state = {
           message: "",
           error: ""
          }
   
  async componentDidMount() {
    const postBody = {method:'POST', headers: {"Content-Type":
    "application/json"}, body: JSON.stringify({email: this.props.uname,
    password:this.props.pass})}
    const response = await fetch('http://localhost:3001/register', postBody)
    await response.json()
      .then(
        data => this.setState({status:data.status,message:data.message}),
        error => {
          this.setState({ error: 'Unable to load Post' })
      })
  }
  
  
  render(){
    return(
    <p>{this.state.message}</p>
  )}
}

//remember to switch this
export default Browse;
