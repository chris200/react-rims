import React from 'react';

const API = "/api/targetvalues/read.php";

class FetcherTarget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: [],
      isLoading:false,
      TT:"",
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
   const TT = Number(output.targettemperature).toFixed(1);
    //this.setState({'TT':{TT}})
    if(isLoading){
      return <div>Loading</div>
    }
return(
  <span>
     {TT}
  </span>);

  }
}
export default FetcherTarget ;
