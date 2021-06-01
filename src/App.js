import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import GuidelinesPage from './pages/GuidelinesPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import TrendingPage from './pages/Trending/Trending';
import SettingsPage from './pages/SettingsPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ExplorePage from './pages/ExplorePage';
import ViewFollowersPage from './pages/ViewFollowersPage';
import ViewFollowingPage from './pages/ViewFollowingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/help/guidelines" component={GuidelinesPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/help/privacy" component={PrivacyPage} />
        <Route exact path="/help/terms" component={TermsPage} />
        <Route exact path="/help" component={TermsPage} />
        <Route exact path="/help/cookies" component={CookiesPage} />
        <Route exact path="/account" component={SettingsPage} />
        <Route exact path="/photos/tags" component={TrendingPage} />
        <Route exact path="/photos/tags-day" component={TrendingPage} />
        <Route exact path="/photos/tags-week" component={TrendingPage} />
        <Route exact path="/change-password" component={ChangePasswordPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/view-followers" component={ViewFollowersPage} />
        <Route exact path="/view-following" component={ViewFollowingPage} />
        {/* <Route exact path="/notfound" component={404_Errorpage} />
        <Redirect to="/notfound" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;