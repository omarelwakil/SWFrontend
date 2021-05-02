import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import GuidelinesPage from './pages/GuidelinesPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/help/guidelines" component={GuidelinesPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        {/* <Route exact path="/notfound" component={404_Errorpage} />
        <Redirect to="/notfound" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
