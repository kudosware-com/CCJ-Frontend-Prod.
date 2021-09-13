import React,{useState, useEffect} from 'react'
import logo from '../assets/20201023_090916_0000.jpg'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    const [logged,setLogged] = useState(props.logged)
    useEffect(()=>{
        setLogged(props.logged)
      },[props])

    const authLinks=()=>{
        return (<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <NavLink activeClassName='is-active' exact={true} className="dropdown-item" to="/setting"><b>Setting</b></NavLink>
        <NavLink activeClassName='is-active' exact={true} className="dropdown-item" to="/save"><b>Saved</b></NavLink>
        <NavLink activeClassName='is-active' exact={true} className="dropdown-item" to="/logout"><b>logout</b></NavLink>

        </div>)
    }
    const guestLinks=()=>{
            return (<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <NavLink activeClassName='is-active' exact={true} className="dropdown-item" to="/login"><b>Login</b></NavLink>
            <NavLink activeClassName='is-active' exact={true} className="dropdown-item" to="/signup"><b>Sign Up</b></NavLink>
        </div>)
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-remove">
            <img src={logo} className="brand-logo" style={{ height: "66px", display: "flex" }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "white"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                        <NavLink activeClassName='is-active' exact={true} className="nav-link" to="/" style={{color: "white", fontSize: "18px"}}><b>Home</b></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName='is-active' exact={true} className="nav-link" to="/blog" style={{color: "white", fontSize: "18px"}}><b>Blogs</b></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName='is-active' exact={true} className="nav-link" to="/contact" style={{color: "white", fontSize: "18px"}}><b>Contact Us</b></NavLink>
                        </li>
                        <li className="nav-item dropdown nav-right">
                            <i className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="/static/icons/profile.png" />
                            </i>
                            {logged ? authLinks() : guestLinks()}
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;
