import './App.css';
import { Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
    </div>
  );
}

export default App;
