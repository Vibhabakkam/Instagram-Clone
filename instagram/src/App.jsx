import './App.css';
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import HomePage from './components/HomePage';
import Login from './components/Login';
import AddPost from './components/AddPost';
import AddStory from './components/AddStory';
import Profile from './components/Profile';
import Search from './components/Search';
function App() {
  return (
    <>
      <div>
        <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/addPost' element={<AddPost/>} />
        <Route exact path='/addStory' element={<AddStory/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/search' element={<Search/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;
