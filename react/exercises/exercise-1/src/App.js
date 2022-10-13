import './styles/styles.css'
import ContactList from './components/containers/contact_list';
import Exercise10 from './components/containers/exercise10';
import JokePage from './pages/JokePage';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';


function App() {
  return (
    <div>
      <TodoContainer/>
      <TodoFormContainer/>
      <FilterOptions/>
    </div>
  );
}

export default App;
