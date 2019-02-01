import React from 'react';
import fetch from 'isomorphic-fetch';

class Kpform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'kpvalue':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);;
  }
  handleChange(event){
this.setState({'data':{'kpvalue':event.target.value}});
  }
  handleSubmit(event){
    const {data}=this.state;
    const form_data=this.state.data;
    // var form_data={
    //   targettemperature:this.state.data,
    // };
    console.log({form_data});
      console.log({data});

    fetch('/api/kpvalues/create.php', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => response.json())
        .catch(err => {
          //console.log(err)
        });



  //  alert("Target was submitted: " + JSON.stringify({target}));



    event.preventDefault();
  }
  render(){
    return(

      <form className='form-inline' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label >
                Kp Input:
              </label>
              <input type='number' id='kpvalue' value={this.state.value} onChange={this.handleChange} />
              <input className='btn btn-primary' type='submit' value='Submit'/>
            </div>


    </form>

    );
  }
}

class Kiform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'kivalue':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
      this.setState({'data':{'kivalue':event.target.value}});
  }
  handleSubmit(event){
    const {data}=this.state;
    const form_data=this.state.data;
    // var form_data={
    //   targettemperature:this.state.data,
    // };
    console.log({form_data});
      console.log({data});

    fetch('/api/kivalues/create.php', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => response.json())
        .catch(err => {
          //console.log(err)
        });



  //  alert("Target was submitted: " + JSON.stringify({target}));



    event.preventDefault();
  }
  render(){
    return(
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>

            <label>
              Ki Input:
            </label>

            <input type='number' id='kivalue' value={this.state.value} onChange={this.handleChange} />


            <input className='btn btn-primary' type='submit' value='Submit'/>

        </div>
      </form>

    );
  }
}

class Kdform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'kdvalue':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({'data':{'kdvalue':event.target.value}});
  }

  handleSubmit(event){
    const {data}=this.state;
    const form_data=this.state.data;
    // var form_data={
    //   targettemperature:this.state.data,
    // };
    console.log({form_data});
      console.log({data});

    fetch('/api/kdvalues/create.php', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => response.json())
        .catch(err => {
          //console.log(err)
        });



  //  alert("Target was submitted: " + JSON.stringify({target}));



    event.preventDefault();
  }
  render(){
    return(
      <form id='kd' className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>

            <label>
              Kd Input:
            </label>

            <input type='number' id='kdvalue' value={this.state.value} onChange={this.handleChange} />

            <input className='btn btn-primary' type='submit' value='Submit'/>

        </div>
    </form>

    );
  }
}

class Targetform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'targettemperature':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({'data':{'targettemperature':event.target.value}});
  }
  handleSubmit(event){
    const {data}=this.state;
    const form_data=this.state.data;
    // var form_data={
    //   targettemperature:this.state.data,
    // };
    console.log({form_data});

    fetch('/api/targetvalues/create.php', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => response.json())
        .catch(err => {
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
