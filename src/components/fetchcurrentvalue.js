import React from 'react';


const API = "/api/currentvalues/read.php";
const APIRefresh = "/api/currenttemprefresh/read.php";

// function getRefresh(){
//      this.setState({isLoading:true});
//      fetch(APIRefresh)
//        .then(res => res.json())
//        .then(data => this.setState({outputRefresh: data}));
//
//    }


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

    // getRefresh=getRefresh.bind(this);

  }

//https://www.robinwieruch.de/react-fetching-data/#react-where-fetch-data
componentDidMount() {
   const refreshsecs=(parseInt(this.state.outputRefresh.refreshseconds))*1000;
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

    const {output, isLoading}=this.state;
    const AT=output.temperature;
    let ATfixed = Number(AT).toFixed(1);

    if(isLoading){
      return <div>Loading...</div>
    }

return(

  <span >
    {ATfixed}  
  </span>
  );

  }
}
export default FetcherCurrent;
