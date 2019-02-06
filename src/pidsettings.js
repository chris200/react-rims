

import React  from 'react';
// import Timer from './components/timer';
import Kpform from './components/kp';
import Kiform from './components/ki';
import Kdform from './components/kd';
import Target from './components/target';
import FetcherCurrent from './components/fetchcurrentvalue';
import Currenttemprefreshform from './components/currenttemprefresh';
import Clock from './components/clock';

class Pidsettings extends React.Component {
  render(){
    return(
<div>
<Kpform />
<Kiform />
<Kdform />
<Target />
<FetcherCurrent />
<Currenttemprefreshform />
<Clock />
</div>
    )
  }
}




export default Pidsettings
