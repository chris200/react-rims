import React from 'react';
import fetch from 'isomorphic-fetch';


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




            <input type='number' id='targetvalue'  placeholder='Target' value={this.state.value} onChange={this.handleChange} />


            <input className='btn btn-primary' type='submit' value='Update'/>

    </div>
    </form>

    );
  }
}

export  {Targetform};
