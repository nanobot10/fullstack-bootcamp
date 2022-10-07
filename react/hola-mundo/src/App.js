import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Father from './components/containers/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskForm from './components/pure/forms/taskForm';
import TaskFormik from './components/pure/forms/taskFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <TaskListComponent /> */}
        {/* <TaskFormik/> */}
        {/* <Father/> */}
       {/* <OptionalRender/> */}
      {/* </header> */}
      {/* <ObservableExample/> */}
      <AxiosCRUDExample/>
    </div>
  );
}

export default App;
