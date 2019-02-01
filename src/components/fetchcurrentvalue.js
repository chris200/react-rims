import React from 'react';
import Time from 'react-time-format'

const API = "/api/currentvalues/read.php";




class FetcherCurrent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: [],
      isLoading:false,
      currentstatus:true,
      date: new Date()
    };

  }
//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {

this.timerID=setInterval(
    () => this.tick(),
    5000
    );
  fetch(API)
    .then(response => response.json())
    .then(data => this.setState({output: data,isLoading:false}));
    //console.log("did m");
  }


componentWillUnmount(){
  clearInterval(this.timerID);
  //console.log("did u");
  }
tick(){
    this.setState({currentstatus:false});
    this.setState({
      date:new Date()
    });
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({output: data,isLoading:false}));
    }


render() {
    const {output, isLoading, currentstatus, date}=this.state;
    if(isLoading){
      return <div>Loading...</div>
    }
    // if(currentstatus){
    //   return <div>CurrentStatus True</div>
    // }
    // if(!currentstatus){
    //   return <div>CurrentStatus False</div>
    // }
return(
  <div>
     {this.state.date.toLocaleTimeString()} Current Temperature: {output.temperature} Time <Time value={output.currentTimestamp} format="YYYY-MM-DD hh:mm:ss" />
  </div>);

  }
}
export default FetcherCurrent;
