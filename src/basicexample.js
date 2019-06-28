
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Pidsettings from './pidsettings.js'
import  Running from './running.js'
// import  Runningchart from './components/runningchart.js'
import  Dygraphshow from './dygraph.js'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul className='nav nav-tabs'>
          <li role='presentation' className=' nav-item'>
            <Link className="nav-link" to="/">Running</Link>
          </li>
          <li className=' nav-item'>
            <Link className="nav-link" to="/pidsettings">Settings</Link>
          </li>
          <li className=' nav-item'>
            <Link className="nav-link" to="/chart">Chart</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/pidsettings" component={PidSettings} />
        <Route path="/chart" component={Chart} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Running</h2>
      <Running />
    </div>
  );
}

function PidSettings() {
  return (
    <div>
      <h2>Settings</h2>
      < Pidsettings />
    </div>
  );
}

function Chart({ match }) {
  return (
    <div>
      <h2>Chart</h2>
      <Dygraphshow />



    </div>
  );
}



export default BasicExample;
