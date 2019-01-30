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

      <form class='form-inline' onSubmit={this.handleSubmit}>
            <div class='form-group'>
              <label >
                Kp Value:
              </label>
              <input type='number' value={this.state.value} onChange={this.handleChange} />
              <input class='btn btn-primary' type='submit' value='Submit'/>
            </div>


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
      <form class='form-inline' onSubmit={this.handleSubmit}>
        <div class='form-group'>

            <label>
              Kp Value:
            </label>

            <input type='number' value={this.state.value} onChange={this.handleChange} />


            <input class='btn btn-primary' type='submit' value='Submit'/>

        </div>
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
      <form class='form-inline' onSubmit={this.handleSubmit}>
        <div class='form-group'>

            <label>
              Kd Value:
            </label>

            <input type='number' value={this.state.value} onChange={this.handleChange} />

            <input class='btn btn-primary' type='submit' value='Submit'/>

        </div>
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
      <form  class='form-inline' onSubmit={this.handleSubmit}>
        <div class='form-group'>

            <label for='targetvalue'>
            Target Value:
            </label>


            <input type='number' id='targetvalue' value={this.state.value} onChange={this.handleChange} />


            <input class='btn btn-primary' type='submit' value='Submit'/>

    </div>
    </form>

    );
  }
}

export  {Kpform, Kiform, Kdform,Targetform};
