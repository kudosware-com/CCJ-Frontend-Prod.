import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import logo from '../assets/20201023_090916_0000.jpg'
import '../css/main.css'
import axiosInstance from './MyAxios';

function Login(props) {
    const {handleLoginFromApp} = props
    const history = useHistory();
	const initialFormData = Object.freeze({
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosInstance.post(`auth/login`,{
            email:formData.email,
            password:formData.password
        }).then((res)=>{
            localStorage.setItem('access_token',res.data.access)
            localStorage.setItem('refresh_token',res.data.refresh)
            handleLoginFromApp(true)
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token')
            history.push('/') 
        })  
    }
    return (
        <div className="card text-left w-75 container" style={{ padding: "20px", marginBottom: "50px" }}>
            <div className="card-body" >
                <center><img src={logo} width="100" height="100" className="d-inline-block align-top" alt="" /></center>
                <br></br>
                <br></br>
                <br></br>
                <div className="container" style={{ justifyContent: "center", width: "70%" }}>

                    <form style={{ width: "100%" }}>
                        <div style={{padding: "30px"}}>
                            <i><img src="/static/icons/user2.png"></img></i>
                            <input className="tryinput" onChange={handleChange} name="email" placeholder="Email Id"></input>
                        </div>

                        <div style={{padding: "30px"}}>
                            <i><img src="/static/icons/pass1.png"></img></i>
                            <input className="tryinput" onChange={handleChange} type="password" name="password" placeholder="Password"></input>
                        </div>

                        <div style={{ padding: "20px", paddingBottom: "50px", paddingTop: "50px" }}><center><button type="submit" onClick={handleSubmit} className="btn" style={{ width: "250px", backgroundColor: "#9D512E" }}><h5 style={{ color: "white" }}>Log In</h5></button></center></div>
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
            </div>
        </div>
    );
}

export default Login;
