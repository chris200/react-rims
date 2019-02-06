import React from 'react';
import fetch from 'isomorphic-fetch';

const API = "/api/targetvalues/read.php";

function getData(){


     this.setState({isLoading:true});
     fetch(API)
       .then(res => res.json())
       .then(data => this.setState({outputTarget: data, 'isLoading':false}));

   }


class Targetform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'targetvalue':''},outputTarget:{targetvalue:''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    getData=getData.bind(this);
    }




componentDidMount() {
      this.setState({isLoading:true});
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({outputTarget: data, 'isLoading':false}));


    }
  handleChange(event){
    this.setState({'data':{'targettemperature':event.target.value,}});


    }
  handleSubmit(event){
      event.preventDefault();
this.setState({'isLoading':true});
      const {data}=this.state;






      fetch('/api/targetvalues/create.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)

          }).then(response => response.json())
          // .then(getData())

          .catch(err => {

          });

          getData();
    }
    render(){
    const {outputTarget, isLoading}=this.state;

    if(isLoading){

      return(
        <div>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input type='number' id='targetvalue' value={this.state.value} placeholder='Target' onChange={this.handleChange} />
                      <input className='' type='submit' value='Update'/>
                    </div>


            </form>


  <div>Loading</div>
        </div>

        )
    }else{
      const isLoading=false;


    return(
      <div>
            <form className='form-inline' onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <input type='number' id='targetvalue' value={this.state.value} placeholder='Target' onChange={this.handleChange} />
                    <input className='' type='submit' value='Update'/>
                  </div>


          </form>


          <div>

            TargetValue: {outputTarget.targettemperature}
          </div>
      </div>
  )
    }









    }
  }

export default Targetform
