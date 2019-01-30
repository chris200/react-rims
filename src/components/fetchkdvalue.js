import React from 'react';

const API = "http://192.168.86.109/react-rims/api/kdvalues/read.php";

class FetcherKd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outputKd: [],
      isLoading:false,
    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKd: data,isLoading:false}));


}

  render() {
    const {outputKd, isLoading}=this.state;
    if(isLoading){
      return <div>Loading</div>
    }
return(
  <div>
    KdValue: {outputKd.kdvalue}
  </div>);

  }
}
export default FetcherKd;
