import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Exercise10 from '../components/containers/exercise10';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import TasksPage from '../pages/TasksPage';

const AppRouter = () => {

    const loggedIn = true;

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                {
                    loggedIn
                    ?
                    <Redirect from='/' to={'/tasks'}/>
                    :
                    <Redirect from='/' to={'/login'} />

                }
                </Route>
                <Route exact path={'/login'} component={LoginPage}/>
                <Route path={'/register'} component={RegisterPage}/>
                <Route path={'/tasks'}>
                {
                    loggedIn
                    ?
                    <TasksPage/>
                    :
                    <Redirect from='/' to='/login'/>
                }
                </Route>
                <Route component={Exercise10}/>
            </Switch>
        </Router>
    );
}

export default AppRouter;
