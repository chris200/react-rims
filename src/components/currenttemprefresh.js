import React from 'react';
import fetch from 'isomorphic-fetch';

const API = "/api/currenttemprefresh/read.php";

function getData(){
     this.setState({isLoading:true});
     fetch(API)
       .then(res => res.json())
       .then(data => this.setState({outputRefresh: data, 'isLoading':false}));

   }


class Currenttemprefreshform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'refreshseconds':''},outputRefresh:{refreshseconds:''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    getData=getData.bind(this);
    }




componentDidMount() {
      this.setState({isLoading:true});
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({outputRefresh: data, 'isLoading':false}));
        console.log("this.state");
        console.log(this.state);

    }
  handleChange(event){
    this.setState({'data':{'refreshseconds':event.target.value,}});


    }
  handleSubmit(event){
      event.preventDefault();
this.setState({'isLoading':true});
      const {data}=this.state;






      fetch('/api/currenttemprefresh/create.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)

          }).then(response => response.json())


          .catch(err => {

          });

          getData();
    }
    render(){
    const {outputRefresh, isLoading}=this.state;
console.log(outputRefresh);
    if(isLoading){

      return(
        <div>
              <form className='form-inline' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <input type='number' id='refresh' value={this.state.value} placeholder='refresh' onChange={this.handleChange} />
                      <input className='' type='submit' value='Update'/>
                    </div>


            </form>


  <div>Loading</div>
        </div>

        )
    }else{
      const isLoading=false;
      //const something = outputRefresh.kpvalue;

    return(
      <div>
            <form className='form-inline' onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <input type='number' id='refresh' value={this.state.value} placeholder='refresh' onChange={this.handleChange} />
                    <input className='' type='submit' value='Update'/>
                  </div>


          </form>


          <div>

            Refresh Seconds: {outputRefresh.refreshseconds}
          </div>
      </div>
  )
    }









    }
  }

export default Currenttemprefreshform
