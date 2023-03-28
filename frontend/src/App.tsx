import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { Providers } from './components/providers/providers';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './pages/head';
const contacts = require('./assets/network.png');
const cover = require('./assets/cover.jpg');


function App() {
  return (
    <main>
      <Providers>
        <Header/>
        {/* <img src={contacts} alt="" className='img1'/> */}
        {/* <img src={contacts} alt="" className='img2'/> */}
        <img src={cover} alt="" className='cover'/>
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default App;
