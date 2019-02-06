import React from 'react';
import Time from 'react-time-format'

const API = "/api/currentvalues/read.php";
const APIRefresh = "/api/currenttemprefresh/read.php";

function getRefresh(){
     this.setState({isLoading:true});
     fetch(APIRefresh)
       .then(res => res.json())
       .then(data => this.setState({outputRefresh: data}));

   }


class FetcherCurrent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: [],
      isLoading:false,
      currentstatus:true,
      date: new Date(),
      outputRefresh:{refreshseconds:"5"}
    };
    getRefresh=getRefresh.bind(this);

  }

//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {

    //  const {outputRefresh}= this.state;

   const refreshsecs=(parseInt(this.state.outputRefresh.refreshseconds))*1000;
        console.log(refreshsecs)



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
      //console.log(this.state);
    
    }


render() {

    const {outputRefresh, output, isLoading, currentstatus, date}=this.state;
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
    Refresh rate: {outputRefresh.refreshseconds}<br></br>
     Current Temperature: {output.temperature}
     <br></br> <Time value={output.currentTimestamp} format= "YYYY-MM-DD" />
     <br></br> <Time value={output.currentTimestamp} format=" h:mm:ss" />
  </div>);

  }
}
export default FetcherCurrent;
