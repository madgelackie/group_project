import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import SolarSystemContainer from './containers/SolarSystemContainer';
import QuizContainer from './containers/NewPage';

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
      </Switch>
    </Router>

  );
}

export default App;
