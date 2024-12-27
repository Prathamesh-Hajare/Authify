import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login.js"
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/login"></Navigate>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/signup' element={<Signup></Signup>}/>
        <Route path='/home' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
