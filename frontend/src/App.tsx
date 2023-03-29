import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { Providers } from './components/providers/providers';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from './pages/head';
import cover from './assets/cover.jpg';
import ReactModal from 'react-modal';
ReactModal.setAppElement("#root");


function App() {
  ReactModal.setAppElement("#root");  
  return (
    <main>
      <Providers>
        <Header/>
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
        theme="light"
      />
    </main>
  );
}

export default App;
