import React from 'react';
import Time from 'react-time-format'

var LineChart = require("react-chartjs").Line;

var chartOptions=
{
	scaleShowGridLines : true,
	scaleGridLineColor : "rgba(0,0,0,.05)",
	scaleGridLineWidth : 1,
	scaleShowHorizontalLines: true,
	scaleShowVerticalLines: true,
	bezierCurve : true,
	bezierCurveTension : 0.4,
	pointDot : true,
	pointDotRadius : 4,
	pointDotStrokeWidth : 1,
	pointHitDetectionRadius : 20,
	datasetStroke : true,
	datasetStrokeWidth : 2,
	datasetFill : true,
	offsetGridLines : false,
};






const API = "/api/currentvalues/readall.php";

function processChartObj(dataset){
	const records=dataset.records;
	const  timestampArray=[];
	const  temperatureArray=[];

}



class FetcherAllCurrent extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      output: [],
      isLoading:false,
      currentstatus:true,
      date: new Date(),
      timestampArray:[],
    };

processChartObj=processChartObj.bind(this);

  }



tick(){
	    this.setState({currentstatus:false});
	    this.setState({
	      date:new Date()
	    });
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
            const {output}=this.state;
						processChartObj(output);
        }


componentWillUnmount(){
  clearInterval(this.timerID);
  }




render() {

    const { data,outputRefresh, output, isLoading, currentstatus,temperatureArray,timestampArray, date}=this.state;
		//console.log([{temperatureArray}]);


 //labels:[]


      return(
    <div > Chris</div>
      )
    }




}

//<LineChart data={data} options={chartOptions} width="600" height="250"/>
//<div > chris</div>


export default FetcherAllCurrent;
