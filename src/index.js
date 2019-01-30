import React  from 'react';
import ReactDOM from 'react-dom';
import FetcherKp from './components/fetchkpvalue';
import FetcherKi from './components/fetchkivalue';
import FetcherKd from './components/fetchkdvalue';
import FetcherTarget from './components/fetchtargetvalue';
import FetcherCurrent from './components/fetchcurrentvalue';
import {Kpform, Kiform, Kdform,Targetform} from './components/forms';


class Kvalues extends React.Component {
  render(){
    return(
    <div className=" well">

      <div class='row'>
        <div class='col-md-3'>
          <FetcherKp />
        </div>
        <div class='col-md-9'>
          <Kpform />
        </div>
    </div>

    <div class='row'>
      <div class='col-md-3'>
        <FetcherKi />
      </div>
      <div class='col-md-9'>
        <Kiform />
      </div>
    </div>

    <div class='row'>
      <div class='col-md-3'>
        <FetcherKd />
      </div>
      <div class='col-md-9'>
      <Kdform />
      </div>
    </div>

    <div class='row'>
      <div class='col-md-3'>
       <FetcherTarget />
      </div>
      <div class='col-md-9'>
      <Targetform />
      </div>
    </div>

    <div class='row'>
      <div class='col-md-3'>
      <FetcherCurrent />
      </div>
      <div class='col-md-9'>

      </div>
    </div>

    </div>
    )
  }
};

ReactDOM.render(
  <Kvalues />,
  document.getElementById('root') );
