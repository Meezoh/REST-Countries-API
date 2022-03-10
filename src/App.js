import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails';
import Home from './Home';
import Titlebar from './Titlebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Titlebar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:alpha3Code">
              <CountryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
