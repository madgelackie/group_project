import './App.css';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import SolarSystemContainer from './containers/SolarSystemContainer';
import QuizContainer from './containers/QuizContainer';


function App() {

  // const quizButton = false

  // const onQuizButtonClick = () => {
  //   const quizButton = true
  // }
  

  return (
    <Router>
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/quiz">Quiz</Link> */}
      <Switch>
        <Route path="/" exact>
          <SolarSystemContainer />
        </Route>
        <Route path="/quiz" exact>
          <QuizContainer />
        </Route>
      </Switch>
    </Router>
    // // {/* <h2>Solar System</h2>
    // <SolarSystemContainer onQuizButtonClick={onQuizButtonClick}/>
    // {quizButton ? <QuizContainer /> :null }
    // </> */}
  );
}

export default App;
