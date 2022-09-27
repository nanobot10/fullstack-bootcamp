import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/containers/task_list';
import Father from './components/containers/father';
import OptionalRender from './components/pure/optionalRender';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <TaskListComponent /> */}
        {/* <Father/> */}
       <OptionalRender/>
      {/* </header> */}
    </div>
  );
}

export default App;
