
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';



 function AppRoutingFinal() {

  //TODO: change to value from session store
  let loggedIn = true;

  return (
    <Router>
      <Switch>

        <Route exact path={'/'}>
          {
            loggedIn
            ?
            <Redirect from='/' to={'/dashboard'}/>
            :
            <Redirect from='/' to={'/login'} />
          }
        </Route>
        <Route exact path={'/login'} component={LoginPage}/>
        <Route exact path={'/dashboard'}>
          {
            loggedIn
            ?
            <DashboardPage/>
            :
            <Redirect from='/' to={'/login'} />
          }
        </Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
