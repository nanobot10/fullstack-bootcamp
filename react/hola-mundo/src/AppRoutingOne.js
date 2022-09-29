
import { useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';
import StatePage from './pages/home/StatePage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksDetailPage from './pages/tasks/tasksDetailPage';
import TasksPage from './pages/tasks/TasksPage';



 function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    },
  ]
  
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log(logged);
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >|| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs' >| FAQs ||</Link>
          <Link to='/task/1' >| Task 1 ||</Link>
          <Link to='/task/2' >| Task 2 ||</Link>
          <Link to='/404' >| Not Existing Route ||</Link>
          <Link to='/login' >| Login ||</Link>
        </aside>

        <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/online-state' component={StatePage}/>
          <Route exact path='/login' component={LoginPage}>
            {
              logged ?
              (() => {
                alert('You are logged in. Redirecting to home...');
                return <Redirect to={'/'} />
              })
              :
              () => {
                return <LoginPage/>
              }
            }
          </Route>
          <Route path={'/(about|faqs)'} component={AboutPage} />
          <Route path={'/profile'} component={ProfilePage} >
            {
              logged 
              ? <ProfilePage/>
              : () => {
                alert('You must be logged in, Redirecting to home...');
                return <Redirect to='/login'/>
              }
            }
          </Route>
          <Route path={'/tasks'} component={TasksPage} />
          <Route 
            exact 
            path='/task/:id'
            render={
              ({match}) => (
                <TasksDetailPage task={taskList[match.params.id - 1]}/>
              )
            }

          />
          <Route component={NotFoundPage} />
        </Switch>
        </main>

      </div>
    </Router>
  );
}

export default AppRoutingOne;
