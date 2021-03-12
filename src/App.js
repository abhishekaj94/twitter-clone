import './App.css';
import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import Widgets from './Widgets';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/home">
            <div className="homepage">
              {/* sidebar */}
              <Sidebar></Sidebar>
              {/* Home Feed */}
              <HomeFeed/>
              {/* Widget bar */}
              <Widgets />
            </div>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
