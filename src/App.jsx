import './App.scss'
import logo from './assets/react.svg'
import ListTodo from './components/todos/ListTodo';
import Mycomponent from './components/example/Mycomponent';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/nav/Nav';
import Home from './components/example/Home';
import ListUser from './components/user/ListUser';
import DetailUser from './components/user/DetailUser';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// 2 components class components and function components

//function component(function, arrow functions)
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/about" element={<Mycomponent />} />
            <Route path="/user" element={<ListUser />} />
            <Route path="/user/:id" element={<DetailUser />} />
          </Routes>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
