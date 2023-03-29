import './App.css';
import { Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { Providers } from './components/providers/providers';

function App() {
  return (
    <div className="App">
      <Providers>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard/>
        </Route>
      </Providers>
    </div>
  );
}

export default App;
