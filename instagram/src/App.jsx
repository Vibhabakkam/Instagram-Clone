import './App.css';
import { Routes, Route } from 'react-router-dom'
import Regiater from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route excat path='/register' element={<Regiater/>} />
        <Route excat path='/login' element={<Login/>} />
        <Route excat path='/' element={<Login/>} />

        </Routes>

      </div>
    </>
  );
}

export default App;
