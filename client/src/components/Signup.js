import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './Logout';
import Navbar from './Navbar';

function Signup( {onSignup, user, setUser } ){

    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [password, setPassword]=useState('')
    const[passwordConfirmation, setPasswordConfirmation]=useState('')
    const navigate = useNavigate()

    // function onSignup(){
    //     navigate('/logins')
    // }
    
    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600"})`
        }
    };

    function handleSubmit(){
        fetch('/signup',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                 firstname: firstname,
                 lastname: lastname,
                 password: password,
                 password_confirmation: passwordConfirmation,
                }),
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
    return (
        <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Signup <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" class="form-control" id="name" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" class="form-control" id="name2" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group">
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} type="password" class="form-control" placeholder="Confirm your password" />
                                    </div>
                                    
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        <small>Already registered?</small>
                                        <a href='/logins'>Login</a>
                                    </div>
                                    <button class="btn btn-primary">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button id='but' onClick={()=>Navigate('/departments')}>Go Back</button> */}

            {/* <div className='bgimage' style={styles.paperContainer}></div> */}
            <Logout setFirstname={setFirstname} setLastname={setLastname} setPassword={setPassword} />
            
        </>
    )
}
export default Signup;