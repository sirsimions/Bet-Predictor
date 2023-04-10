import './App.css';
import Chance from './components/Chance';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'


function App() {

  return(
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/chance' element={<Chance/>}/>
    </Routes>
    </>
  )
}


export default App;
