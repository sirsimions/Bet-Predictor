import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const navigate = useNavigate()


    function handleSubmit( {onSignup} ) {
        fetch('/signup', {
            method: 'POST',
            headers: { 'Application_Type': 'application/json' },
            body: JSON.stringify({
                firstname,
                lastname,
                password,
                passwordConfirmation,
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        console.log(user)
                        onSignup(user)
                    })
                }
            })

    }
    return (
        <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Registration <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" class="form-control" id="name" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input value={lastname} onChange={(e)=>setLastname(e.target.value)} type="text" class="form-control" placeholder="Last Name" />
                                    </div>
                                    
                                    <div class="form-group">
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="password" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} type="password" class="form-control" id="confirm-password" placeholder="confirm-password" />
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        <button class="btn btn-primary">Register</button>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        <small>Already registered?</small>
                                        <a href='/login'>Login</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </>
    )
}
export default Signup;