import logo from './logo.svg';
import './App.css';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import TaskListComponent from './components/containers/task_list';
import GreetingStyled from './components/pure/greetingStyled';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent /> */}
        {/* <Ejemplo4 nombre= 'Dennis'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        <GreetingStyled name = "Dennis"/>
      </header>
    </div>
  );
}

export default App;
