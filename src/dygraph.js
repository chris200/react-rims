import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import $ from 'jquery';
import 'dygraphs/dist/dygraph.min.css'

const actualAPI = "/api/currentvalues/readall.php";
;

class Dygraphshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      actualtemp: [],
      targettemp: [],
    }
    this.style={
    width:"1000px",
    height:"400px",
    borderStyle:" solid",
    borderWidth:"1px",
    borderRadius:"3px",
    borderColor:"#3D1C7F",
    backgroundColor:"#FFFFFF",




    }
  }

    render() {
      const {  actualtemp, targettemp } = this.state;
    //  const timestampArray=[];
  //    const temperatureArray=[];
  //    const targettimestampArray=[];
  //    const targettemperatureArray=[];
      const actualtimestampIndex=[];
      const actualresultarray=actualtemp.records;
    //  const targetresultarray=targettemp.records;

      if((actualtemp.records==null)==false){
        const actualtimestampArray=actualresultarray.map(x=>x.timestamp)
      //  const actualtemperatureArray=actualresultarray.map(x=>x.temperature)
        const mess=actualresultarray.map(x=>[x.timestamp,x.temperature])
        $.each(actualtimestampArray,function(index,item){
          actualtimestampIndex.push(index);
        })

        //console.log(mess);

        const messages=mess;
        var data = "";
        messages.forEach((response) => {
            data += response[0] + ',' + response[1] + "\n";
        });
      //  console.log(data);
        new Dygraph(this.refs.chart, data, {
            labels:['Date',"Temp"],
             ylabel: 'Temperature',
             xlabel: 'Time',
             color:"#AD84FF",

        });


  }

        return <div ref="chart" style={this.style}></div>;


}
componentWillUnmount(){
  clearInterval(this.timerID);
  }
tick(){
    this.setState({currentstatus:false});
    this.setState({
      date:new Date()
    });
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
      //console.log(this.state);

    }
componentDidMount() {
        // const messages = [];
        // const refreshsecs=(parseInt(1))*1000;
             this.timerID=setInterval(
             () => this.tick(),
             10000
               );

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
    }
}
export default Dygraphshow
