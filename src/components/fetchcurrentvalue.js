import React from 'react';

const API = "http://192.168.86.109/react-rims/api/currentvalues/read.php";

class FetcherCurrent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: [],
      isLoading:false,
    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({output: data,isLoading:false}));


}

  render() {
    const {output, isLoading}=this.state;
    if(isLoading){
      return <div>Loading</div>
    }
return(
  <div>
    Current Temperature: {output.temperature}
  </div>);

  }
}
export default FetcherCurrent;
