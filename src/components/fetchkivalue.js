import React from 'react';

const API = "/api/kivalues/read.php";

class FetcherKi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      outputKi: [],
      isLoading:false,
    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
  this.setState({isLoading:true});
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({outputKi: data,isLoading:false}));


}

  render() {
    const {outputKi, isLoading}=this.state;
    if(isLoading){
      return <div>Loading</div>
    }
return(
  <div>
    KiValue: {outputKi.kivalue}
  </div>);

  }
}
export default FetcherKi;
