import 'bootstrap/dist/css/bootstrap.css';

import React  from 'react';
import ReactDOM from 'react-dom';
import FetcherKp from './components/fetchkpvalue';
import FetcherKi from './components/fetchkivalue';
import FetcherKd from './components/fetchkdvalue';
import FetcherTarget from './components/fetchtargetvalue';
import FetcherCurrent from './components/fetchcurrentvalue';
import Timer from './components/timer';
import {Kpform, Kiform, Kdform,Targetform} from './components/forms';





class Kvalues extends React.Component {
  render(){
    return(
<div className=" well">
  <div className="row">
    <div className="settings col-md-6">
          <FetcherKp />
          <FetcherKi />
          <FetcherKd />
          <FetcherTarget />
          <FetcherCurrent />
      </div>

      <div className="updateSettings col-md-6">
          <Kpform />
          <Kiform />
          <Kdform />
          <Targetform />
      </div>
    </div>
</div>
    )
  }
};




ReactDOM.render(

  <Kvalues />,
  document.getElementById('root') );
