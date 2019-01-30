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
    <div className="Kvalues">Hello
      <div className='kpvalue'> <FetcherKp /> <Kpform /> </div>
      <div className='kivalue'> <FetcherKi /> <Kiform /></div>
      <div className='kdvalue'> <FetcherKd /><Kdform /></div>
      <div className='target'> <FetcherTarget /> <Targetform /></div>
        <div className='current'> <FetcherCurrent /> </div>
    </div>
    )
  }
};

ReactDOM.render(
  <Kvalues />,
  document.getElementById('root') );
