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

      <div className='row'>
        <div className='col-md-3'>
          <FetcherKp />
        </div>
        <div className='col-md-9'>
          <Kpform />
        </div>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <FetcherKi />
      </div>
      <div className='col-md-9'>
        <Kiform />
      </div>
    </div>

    <div className='row'>
      <div className='col-md-3'>
        <FetcherKd />
      </div>
      <div className='col-md-9'>
      <Kdform />
      </div>
    </div>

    <div className='row'>
      <div className='col-md-3'>
       <FetcherTarget />
      </div>
      <div className='col-md-9'>
      <Targetform />
      </div>
    </div>

    <div className='row'>
      <div className='col-md-3'>
      <FetcherCurrent />
      </div>
      <div className='col-md-9'>

      </div>
    </div>

    </div>
    )
  }
};
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}



ReactDOM.render(
  // <Testkpfetch />,
  <Kvalues />,
  document.getElementById('root') );
