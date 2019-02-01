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



          <FetcherKp />
          <FetcherKi />
          <FetcherKd />
          <FetcherTarget />
          <FetcherCurrent />
          <Kpform />
          <Kiform />
          <Kdform />
          <Targetform />

    </div>
    )
  }
};




ReactDOM.render(
  // <Testkpfetch />,
  <Kvalues />,
  document.getElementById('root') );
