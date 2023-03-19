import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = () => {
    let [name, setName] = useState('');
    let [phonenumber, setPhonenumber] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmpassword, setConfirmpassword] = useState('');

    let navigate = useNavigate()

    let handlesubmit = (e) => {
        e.preventDefault();
        let data = { name, email, phonenumber, password, confirmpassword };
        if (name && email && phonenumber && (password === confirmpassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        } else {
            alert('invalid credentials')
        }

    }

    return (
        <div className="container">
            <div className="card w-50 mx-auto my-5">
                <div className="card-body">
                    <div className="signup">
                        <h1>Sign Up</h1>
                        <div className="signup_form">
                            <form action="" onSubmit={handlesubmit}>
                                <div className="Name my-4">
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter your name" />
                                </div>
                                <div className="mobile_number my-4">
                                    <input type="text" className="form-control" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} name="phonenumber" placeholder="Enter your Mobile Number" />
                                </div>
                                <div className="email my-4">
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your email" />
                                </div>
                                <div className="password my-4">
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password" />
                                </div>
                                <div className="confirm_password my-4">
                                    <input type="password" className="form-control" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} name="confirm_password" placeholder="Enter your confirm-password" />
                                </div>
                                <button className="btn btn-primary">Signin</button>
                                <div className="login_button">
                                    <p>Already a user?</p>
                                    <Link to="/" className="btn btn-outline-primary">Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;





