import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import GuidelinesPage from './pages/GuidelinesPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiesPage from './pages/CookiesPage';
import TrendingPage from './pages/Trending/Trending';
import SettingsPage from './pages/SettingsPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ExplorePage from './pages/ExplorePage';
import SearchPhotosPage from './pages/SearchPhotosPage';
import SearchPeoplePage from './pages/SearchPeoplePage';
import UserAboutPage from './pages/UserAboutPage';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import PhotoStream from './pages/PhotoStream/PhotoStream';
import CameraRoll from './pages/CameraRoll/CameraRoll';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/help/guidelines" component={GuidelinesPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
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
        <Route exact path="/photo/getDetails/:id" component={PhotoPage} />
        <Route exact path="/user/photostream/:id" component={PhotoStream} />
        <Route exact path="/user/cameraRoll/:id" component={CameraRoll} />
        <Route exact path="/search/photos/:searchText" component={SearchPhotosPage} />
        <Route exact path="/search/people/:searchText" component={SearchPeoplePage} />
        <Route exact path="/people/:id" component={UserAboutPage} />
        <Route exact path="/photos/upload" component={UploadPage} />
        {/* <Route exact path="/notfound" component={404_Errorpage} />
        <Redirect to="/notfound" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
