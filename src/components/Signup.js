import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../assets/20201023_090916_0000.jpg'
import '../css/main.css'
import axiosInstance from './MyAxios'
function Signup() {
    const history = useHistory();
    const initialFormData = Object.freeze({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});
	const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
    const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`/auth/register`,JSON.stringify({
				first_name: formData.firstname,
                last_name: formData.lastname,
				email: formData.email,
				password: formData.password,
			}))
			.then((res) => {
				console.log(res.statusText);
				history.push('/login');	
			},(error)=>{
				alert("1. Password should have minimum of 8 character including numbers\n" + "2. Check if email is already registered")
			});
	};
    return (
        <div className="card text-left w-75 container" style={{ padding: "20px", marginBottom: "30px" }}>
            <div className="card-body" >
                <center><img src={logo} width="100" height="100" className="d-inline-block align-top" alt="" /></center>
                <br></br>
                <br></br>
                <br></br>
                <div className="container" style={{ justifyContent: "center", width: "70%" }}>

                    <form style={{ width: "100%" }}>
                        <div style={{ padding: "20px", display: "flex" }}>
                            <input className="tryinput" name="firstname" onChange={handleChange} placeholder="First Name" style={{marginleft: "10px", marginRight: "10px", position: "relative", left: "5px"}}></input>
                            <input className="tryinput" name="lastname" onChange={handleChange}placeholder="Last Name"  style={{marginLeft: "10px", position: "relative", left: "5px"}}></input>
                        </div>
                        <div style={{ padding: "20px" }}>
                            <input className="tryinput" name="email" onChange={handleChange} placeholder="Email Id" style={{width: "100%", margin: "5px"}}></input>
                        </div>

                        <div style={{ padding: "20px" }}>
                            <input className="tryinput" name="password" onChange={handleChange} placeholder="Password" style={{width: "100%", margin: "5px"}}></input>
                        </div>

                        <div style={{ padding: "20px", paddingBottom: "50px", paddingTop: "50px" }}><center><button type="submit" onClick={handleSubmit} className="btn" style={{ width: "100%", backgroundColor: "#9D512E", position: "relative", left: "5px" }}><h5 style={{ color: "white" }}>Sign Up</h5></button></center></div>
                    </form>
                </div>
                <center><h5>Or</h5></center>
            </div>
            <div className="card-body">
                <center>
                    <i style={{ padding: "20px" }}>
                        <a><img src="/static/icons/google.png" /></a>
                    </i>
                    <i style={{ padding: "20px" }}>
                        <a><img src="/static/icons/F1.png" /></a>
                    </i>
                    <i style={{ padding: "20px" }}>
                        <a><img src="/static/icons/apple.png" /></a>
                    </i>
                </center>
                <br></br>
                <center><p>Already have an account? </p><NavLink activeClassName='is-active' exact={true} to="/login">Login here</NavLink></center>
            </div>
        </div>
    );
}

export default Signup;
