import 'bootstrap/dist/css/bootstrap.css';

import React  from 'react';

// import FetcherKp from './componentstest/fetchkpvalue';
// import FetcherKi from './componentstest/fetchkivalue';
//  import FetcherKd from './componentstest/fetchkdvalue';
// import FetcherTarget from './componentstest/fetchtargetvalue';
// import FetcherCurrent from './componentstest/fetchcurrentvalue';
import Timer from './components/timer';
import {Kpform} from './componentstest/forms';





class Kvalues extends React.Component {
  render(){
    return(
<div className=" well">
  <div className="row">
    <div className="settings col-md-6">


      </div>

      <div className="updateSettings col-md-6">
          <Kpform />

      </div>
    </div>
</div>
    )
  }
}




export default Kvalues
