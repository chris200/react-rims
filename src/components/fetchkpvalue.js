import React from 'react';

const API = "http://192.168.86.109/react-rims/api/kpvalues/read.php";

class FetcherKp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outputKp: [],
      isLoading:false,
    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKp: data,isLoading:false}));


}

  render() {
    const {outputKp, isLoading}=this.state;
    if(isLoading){
      return <div>Loading</div>
    }
return(
  <div>
    KpValue: {outputKp.kpvalue}
  </div>);

  }
}
export default FetcherKp;
