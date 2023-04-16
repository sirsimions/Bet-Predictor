import './App.css';
import Chance from './components/Chance';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';


function App() {

  return(
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/chance' element={<Chance/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}


export default App;
