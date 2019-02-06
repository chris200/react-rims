import React from 'react';
import fetch from 'isomorphic-fetch';
const API = "/api/kpvalues/read.php";




//Parent
class Kpform extends React.Component{
  constructor(props){
    super(props);
    this.state={data:{'kpvalue':''}};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  updateChild(isLoading) {
    console.log("updateChild ran");
    console.log(isLoading);
    updateState(isLoading);

  }
  handleChange(event){
this.setState({'data':{'kpvalue':event.target.value,}});


  }
  handleSubmit(event){
    event.preventDefault();

    const {data}=this.state;


    this.updateChild(true);



    fetch('/api/kpvalues/create.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then(response => response.json())
        
        .catch(err => {
          //console.log(JSON.stringify(err))
        });
        console.log("isLoading Submit");
        console.log(JSON.stringify({data}));


  //  alert("Target was submitted: " + JSON.stringify({target}));





  }
  render(){
    return(
<div>
      <form className='form-inline' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <input type='number' id='kpvalue' value={this.state.value} placeholder='Kp' onChange={this.handleChange} />
              <input className='' type='submit' value='Update'/>
            </div>


    </form>

<FetcherKp  />

</div>
    );
  }
}

function updateState(isLoading){
    console.log("updateState Ran");
    console.log(isLoading);
    this.setState({isLoading});

}
//child
class FetcherKp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outputKp: [],

    }
updateState = updateState.bind(this)
  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKp: data,isLoading:false}))
}


  render() {
    const {isLoading, outputKp}=this.state;
    if(isLoading===true){
      return(
        <div>Loading</div>
        )
    }
    return(

    <div>
      KpValue:{outputKp.kpvalue}
    </div>)
    }


}

export  default Kpform;
