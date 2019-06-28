

import React  from 'react';
import FetcherCurrent from './components/fetchcurrentvalue';

import FetcherTarget from './components/fetchtargetvalue';

import FetcherKp from './components/fetchkpvalue';
import FetcherKi from './components/fetchkivalue';
import FetcherKd from './components/fetchkdvalue';
import Clock from './components/clock';
import Dygraphshow from './dygraph.js';






class Running extends React.Component {
  constructor(props) {
    super(props);

      this.style={

      borderStyle:" solid",
      borderWidth:"1px",
      borderRadius:"3px",
      borderColor:"#3D1C7F",
      backgroundColor:"#AD84FF ",
      color:"white",
      fontSize:"2em",
			fontFamily:"Technology",


      }
    }
  render(){

    return(
<div className="row">
  <div className="col-md-2">
    <div className="row">
      <div className="col-md-12">
				<div className="clock" style={this.style}>
      			<Clock />
				</div>
			</div>
			<div className="col-md-12">
        <div className="temperature" style={this.style}>
            AT: <FetcherCurrent />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="temperature" style={this.style}>
            TT: <FetcherTarget />
        </div>
      </div>
			<div className="col-md-12">
        <div  style={this.style}>
            KP: <FetcherKp />
        </div>
      </div>
			<div className="col-md-12">
        <div  style={this.style}>
            KI: <FetcherKi />
        </div>
      </div>
			<div className="col-md-12">
        <div  style={this.style}>
            KD: <FetcherKd />
        </div>
      </div>
    </div>

  </div>
  <div className="col-md-10">
    <Dygraphshow />
  </div>
</div>
    )
  }
}




export default Running
