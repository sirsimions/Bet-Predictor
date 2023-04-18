import React, {useState} from 'react'
import '../App.css'

function Login({setUser, onLogin}){

    const [firstname, setFirstName] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: localStorage.token
            },
            body: JSON.stringify({
                firstname: firstname,
                password: password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error)
                } else {
                    localStorage.setItem("user", JSON.stringify(data.user))
                    localStorage.setItem("token", data.jwt)
                    setUser(data.user)
                    // setRole(data.user.role)
                    onLogin()
                }
                console.log(data)
                // console.log(user)
               
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card" id='posit' >
                            <h2 class="card-title text-center">Login <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4" id='form'>
                                <form _lpchecked="1" classname='form' onSubmit={handleSubmit}>

                                    <div class="form-group">
                                        <input value={firstname} onChange={(e)=>setFirstName(e.target.value)} type="text" class="form-control" id="email" placeholder="firstname" />
                                    </div>


                                    <div class="form-group">
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="password" placeholder="Password" />
                                    </div>
                                    {/* {errors.length > 0 &&
                                        <div className='input-control'>
                                            <div style={{ color: "red" }}>
                                                {errors.map((error, index) =>
                                                    <p key={index}>{error}</p>
                                                )}
                                            </div>
                                        </div>
                                    } */}
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        
                                        <button class="btn btn-primary">Login</button>
                                    </div>
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        {/* <small>Don't have an account ?</small>
                                        <button class="btn btn-primary" onClick={handleClick}>Signup</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;