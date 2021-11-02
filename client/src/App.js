import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import SolarSystemContainer from './containers/SolarSystemContainer';
import QuizContainer from './containers/NewPage';
import UserContainer from './containers/UserContainer';


function App() {

  return (
    <Router>

      <Switch>
        <Route path="/" exact>
          <SolarSystemContainer />
        </Route>
        <Route path="/quiz" exact>
          <QuizContainer />
        </Route>
        <Route path="/user" exact>
          <UserContainer />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
