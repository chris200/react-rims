import React from 'react';

class Kpform extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert("Kp was submitted: " + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Kp Value:
      <input type='number' value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Submit'/>
      </form>

    );
  }
}

class Kiform extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert("Ki was submitted: " + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Kp Value:
      <input type='number' value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Submit'/>
      </form>

    );
  }
}

class Kdform extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert("Kd was submitted: " + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Kd Value:
      <input type='number' value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Submit'/>
      </form>

    );
  }
}

class Targetform extends React.Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert("Target was submitted: " + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
      Target Value:
      <input type='number' value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type='submit' value='Submit'/>
      </form>

    );
  }
}

export  {Kpform, Kiform, Kdform,Targetform};
