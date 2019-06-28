

import React  from 'react';
// import Timer from './components/timer';
import Kpform from './components/kp';
import Kiform from './components/ki';
import Kdform from './components/kd';
import Target from './components/target';
import FetcherCurrent from './components/fetchcurrentvalue';
import Currenttemprefreshform from './components/currenttemprefresh';
import Clock from './components/clock';


import FetcherTarget from './components/fetchtargetvalue';

import FetcherKp from './components/fetchkpvalue';
import FetcherKi from './components/fetchkivalue';
import FetcherKd from './components/fetchkdvalue';





class Pidsettings extends React.Component {
  render(){
    return(
<div className="row">
  <div className="col-md-2">
  </div>
  <div className="col-md-4">

  <div className="row">
    <div className="col-md-12">
      <div className="temperature"  style={this.style}>
          <Clock />
      </div>
    </div>
    <div className="col-md-12">
      <div className="temperature" style={this.style}>
      AT: <FetcherCurrent />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="temperature" style={this.style}>
            TT: <FetcherTarget />
        </div>
      </div>
			<div className="col-md-12">
        <div className="temperature" style={this.style}>
            KP: <FetcherKp />
        </div>
      </div>
			<div className="col-md-12">
        <div className="temperature" style={this.style}>
            KI: <FetcherKi />
        </div>
      </div>
			<div className="col-md-12">
        <div className="temperature"  style={this.style}>
            KD: <FetcherKd />
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className="col-md-4">
    <Kpform />
    <Kiform />
    <Kdform />
    <Target />

    <Currenttemprefreshform />
    <Clock />
    </div>
</div>
    )
  }
}




export default Pidsettings
