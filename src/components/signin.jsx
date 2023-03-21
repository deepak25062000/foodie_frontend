import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate()
    let handlesubmit = (e) => {
        e.preventDefault();

        let data = { email, password };

        axios.post('http://localhost:4000/signin', data)
            .then((res) => {
                if (res.data.message === 'signin successfull') {
                    navigate('/home')
                } else {
                    alert(res.data.message)
                }
            })
    }


    return (
        <div>
            <div className="login container pt-5">
                <div className="card w-50 mx-auto my-5 shadow">
                    <div className="card-body">
                        <h1>Login Page</h1>
                        <div className="container">
                            <div className="login_form">
                                <form action="" onSubmit={handlesubmit}>


                                    <div className="email form-group my-4">
                                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter your email" />
                                    </div>


                                    <div className="password form-group my-4">
                                        <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter your password" />
                                    </div>


                                    <div className="login_button">
                                        <button className="btn btn-primary">Login</button>
                                    </div>


                                    <div className="signup_button my-4">
                                        <p>Are you a new user?</p>
                                        <Link to="/signup" className="btn btn-outline-primary">Signup</Link>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;