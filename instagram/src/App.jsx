import './App.css';
import { Routes, Route } from 'react-router-dom'
import Regiater from './components/Register';
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route excat path='/register' element={<Regiater/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
