import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/notfound" component={ } />
        <Redirect to="/notfound" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
