import React from 'react';
import fetch from 'isomorphic-fetch';
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

      <form className='form-inline' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label >
                Kp Value:
              </label>
              <input type='number' value={this.state.value} onChange={this.handleChange} />
              <input className='btn btn-primary' type='submit' value='Submit'/>
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
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>

            <label>
              Kp Value:
            </label>

            <input type='number' value={this.state.value} onChange={this.handleChange} />


            <input className='btn btn-primary' type='submit' value='Submit'/>

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
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>

            <label>
              Kd Value:
            </label>

            <input type='number' value={this.state.value} onChange={this.handleChange} />

            <input className='btn btn-primary' type='submit' value='Submit'/>

        </div>
    </form>

    );
  }
}

class Targetform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'temp':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({'data':{'target':event.target.value}});
  }
  handleSubmit(event){
    const {data}=this.state;
    var form_data={
      temp:this.state.data,
    };
    console.log({form_data});
    fetch('/api/targettemp/create.php', {
            method: 'POST',
            mode: 'no-cors',
            body: {targettemperature:10},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
            console.log(res);
        }).catch(err => {
          console.log(err)});



  //  alert("Target was submitted: " + JSON.stringify({target}));



    event.preventDefault();
  }
  render(){
    return(
      <form id='target' className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>

            <label >
            Target Value:
            </label>


            <input type='number' id='targetvalue' value={this.state.value} onChange={this.handleChange} />


            <input className='btn btn-primary' type='submit' value='Submit'/>

    </div>
    </form>

    );
  }
}





export  {Kpform, Kiform, Kdform,Targetform};
