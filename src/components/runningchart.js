import React  from 'react';
import $ from 'jquery'
var LineChart = require("react-chartjs").Line;
var data = {
	labels: [],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "green",
			pointColor: "green",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: []
		},
    // {
		// 	label: "My second dataset",
		// 	fillColor: "rgba(220,220,220,0.2)",
		// 	strokeColor: "blue",
		// 	pointColor: "blue",
		// 	pointStrokeColor: "#fff",
		// 	pointHighlightFill: "#fff",
		// 	pointHighlightStroke: "rgba(220,220,220,1)",
		// 	data: []
		// }

	],
};

var chartOptions=
{
color:['blue','green'],
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - Whether the line is curved between points
	bezierCurve : false,

	//Number - Tension of the bezier curve between points
	bezierCurveTension : 0.4,

	//Boolean - Whether to show a dot for each point
	pointDot : false,
	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false,
};



const actualAPI = "/api/currentvalues/readall.php";
const targetAPI = "/api/targetvalues/readall.php";

class Runningchart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      actualtemp: [],
      targettemp: [],
    };
  }

  componentDidMount() {
    fetch(actualAPI)
      .then(res => res.json())
      .then((result) => {this.setState({isLoaded: true, actualtemp: result});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            actualtemp:"",
            error
          });
        }
      )
      fetch(targetAPI)
        .then(res => res.json())
        .then((result) => {this.setState({isLoaded: true, targettemp: result});
          },
          (error) => {
            this.setState({
              isLoaded: true,
              targettemp:"",
              error
            });
          }
        )
  }

  render() {
    const { error, isLoaded, actualtemp, targettemp } = this.state;
    const timestampArray=[];
    const temperatureArray=[];
    const targettimestampArray=[];
    const targettemperatureArray=[];
const actualtimestampIndex=[];
    const actualresultarray=actualtemp.records;
    const targetresultarray=targettemp.records;

    //console.log(targettemp.records==null)
    if((actualtemp.records==null)==false){
      const actualtimestampArray=actualresultarray.map(x=>x.timestamp)
      const actualtemperatureArray=actualresultarray.map(x=>x.temperature)

      $.each(actualtimestampArray,function(index,item){
        actualtimestampIndex.push(index);
      })
     data.labels=actualtimestampIndex;
      data.datasets[0].data=actualtemperatureArray;
      console.log(data);
    }
    // if((targettemp.records==null)==false){
    //   const targettimestampArray=targetresultarray.map(x=>x.timestamp)
    //   const targettemperatureArray=targetresultarray.map(x=>x.targettemperature)
    //
    //   //console.log(targettemperatureArray[(targettemperatureArray.length-1)]);
    //   const lasttargettemp=targettemperatureArray[(targettemperatureArray.length-1)];
    //
    //   const ts=new Date();
    //   const lasttargettemptimestamp=(ts.toLocaleDateString() + " " +ts.toLocaleTimeString() );
    //   targettemperatureArray.push(lasttargettemp);
    //   targettimestampArray.push(lasttargettemptimestamp);
    //   //data.labels=targettimestampArray;
    //   data.datasets[1].data=targettemperatureArray;
    //   //console.log(targettimestampArray);
    // }


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
         <LineChart data={data} options={chartOptions} width="800" height="400"/>
      );
    }
  }
}

export default Runningchart
