
import './style.css';
import React  from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './basicexample';
import './serial';





class Output extends React.Component {
  render(){
    return(

          <BasicExample />


    )
  }
};




ReactDOM.render(

  <Output />,
  document.getElementById('root') );
