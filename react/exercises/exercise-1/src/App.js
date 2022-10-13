import './styles/styles.css'
import ContactList from './components/containers/contact_list';
import Exercise10 from './components/containers/exercise10';
import JokePage from './pages/JokePage';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';
import TaskList from './components/Task';


function App() {
  return (
    <div>
      {/* <TodoContainer/>
      <TodoFormContainer/>
      <FilterOptions/> */}
      <TaskList/>
    </div>
  );
}

export default App;
