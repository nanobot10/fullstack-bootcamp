import logo from './logo.svg';
import './App.css';
import LoginUseState from './components/LoginUseState';
import LoginUseReducer from './components/LoginUseReducer';

function App() {
  return (
    <div className="container">
      {/* <LoginUseState/> */}
      <LoginUseReducer/>
    </div>
  );
}

export default App;
