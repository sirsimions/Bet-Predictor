import React, {useState, useEffect} from 'react'
import './App.css';
import Chance from './components/Chance';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import {useNavigate} from 'react-router-dom'


function App() {

  const [user, setUser] = useState('')
  const navigate = useNavigate()

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);
  

  function onLogin(){
    navigate('/')
  }
  function onSignup(){
    navigate('/logins')
  }

  return(
    <>
    <Navbar user={user} setUser ={setUser}/>
    <Routes>
      <Route exact path='/' element={<Home user={user}/>}/>
      <Route exact path='/chance' element={<Chance user={user}/>}/>
      <Route exact path='/signups' element={<Signup onSignup={onSignup}/>}/>
      <Route exact path='/logins' element={<Login onLogin={onLogin} setUser ={setUser}/>}/>
    </Routes>
    </>
  )
}


export default App;
