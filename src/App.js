
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { Main } from './components/Main';
import Hero from './components/Hero';

function App() {
  return (
    <div >
       <BrowserRouter>
 
  <Routes>

  <Route exact path='/' element={<Main/>} />
  <Route exact path='/login' element={<Login/>} />
  <Route exact path='/home' element={<Hero/>} />


  </Routes>

  </BrowserRouter>

    </div>
  );
}

export default App;
