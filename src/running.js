

import React  from 'react';
import FetcherCurrent from './components/fetchcurrentvalue';
 import Clock from './components/clock';


class Running extends React.Component {
  render(){
    return(
<div>
  <Clock />
<FetcherCurrent />
</div>
    )
  }
}




export default Running
