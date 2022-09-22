import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Father from './components/containers/father';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TaskListComponent />
        {/* <Father/> */}
       
      {/* </header> */}
    </div>
  );
}

export default App;
