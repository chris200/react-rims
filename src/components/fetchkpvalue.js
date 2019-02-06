import React from 'react';

const API = "/api/kpvalues/read.php";



class FetcherKp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outputKp: [],

    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKp: data, 'isLoading':false}));


}

  render() {
    const {outputKp, isLoading}=this.state;

    if(isLoading){
      console.log({isLoading});
      return(

        <div>Loading</div>
        )
    }else{
      const isLoading=false;
      console.log({isLoading});
    return(

    <div>
      KpValue:{outputKp.kpvalue} isLoading: {JSON.stringify(isLoading)} 
    </div>)
    }

  }
}

export default FetcherKp;
