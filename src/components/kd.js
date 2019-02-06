import React from 'react';
import fetch from 'isomorphic-fetch';

const API = "/api/kdvalues/read.php";

function getData(){


     this.setState({isLoading:true});
     fetch(API)
       .then(res => res.json())
       .then(data => this.setState({outputKd: data, 'isLoading':false}));

   }


class Kdform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'kdvalue':''},outputKd:{kdvalue:''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    getData=getData.bind(this);
    }




componentDidMount() {
      this.setState({isLoading:true});
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({outputKd: data, 'isLoading':false}));


    }
  handleChange(event){
    this.setState({'data':{'kdvalue':event.target.value,}});


    }
  handleSubmit(event){
      event.preventDefault();
this.setState({'isLoading':true});
      const {data}=this.state;






      fetch('/api/kdvalues/create.php', {
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
    const {outputKd, isLoading}=this.state;

    if(isLoading){

      return(
        <div>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input type='number' id='kdvalue' value={this.state.value} placeholder='Kd' onChange={this.handleChange} />
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
                    <input type='number' id='kdvalue' value={this.state.value} placeholder='Kd' onChange={this.handleChange} />
                    <input className='' type='submit' value='Update'/>
                  </div>


          </form>


          <div>

            KdValue: {outputKd.kdvalue}
          </div>
      </div>
  )
    }









    }
  }

export default Kdform
