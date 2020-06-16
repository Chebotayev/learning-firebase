// LIBS
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as firebase from 'firebase';
// ROUTER
import { routes } from './routes';

// COMPONENTS
import Root from './components/Root';
import Home from './components/Home';
import SignUp from './components/SignUp';

// REDUX
import { userSelectors } from './redux/selectors';

// UTILS
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const App = () => {
  const isLogged = useSelector(userSelectors.selectUser);

  const loggedInRoutes = (
    <Router>
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path="*" render={() => <Redirect to={routes.home} />} />
      </Switch>
    </Router>
  );

  const loggedOutRoutes = (
    <Router>
      <Switch>
        <Route exact path={routes.root} component={Root} />
        <Route path={routes.signUp} component={SignUp} />
        <Route path="*" render={() => <Redirect to={routes.root} />} />
      </Switch>
    </Router>
  );

  return isLogged ? loggedInRoutes : loggedOutRoutes;
};

export default App;
