
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Pidsettings from './pidsettings.js'
import  Running from './running.js'

function BasicExample() {
  return (
    <Router>
      <div>
        <ul className='menu navigation-menu'>
          <li role='presentation' className='active'>
            <Link to="/">Running</Link>
          </li>
          <li>
            <Link to="/pidsettings">Settings</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/pidsettings" component={PidSettings} />
        <Route path="/topics" component={Topics} />
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

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
