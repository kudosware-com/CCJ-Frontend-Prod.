import React from 'react'
import logo from '../assets/20201023_090916_0000.jpg'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer class="page-footer font-small cyan darken-3" style={{ position: "relative" ,width: "100%" , backgroundColor: "#574F22", bottom: "0px" }}>
            <div class="container">

                <div className="container">
                    <div class="row" style={{ paddingTop: "10px", height: "50px" }}>
                        <div class="col">
                            <center><NavLink activeClassName='is-active' exact={true} className="nav-link" to="/" style={{ color: "white" }}>Home</NavLink></center>
                        </div>
                        <div class="col">
                            <center><NavLink activeClassName='is-active' exact={true} className="nav-link" to="/blog" style={{ color: "white" }}>Blogs</NavLink></center>
                        </div>
                        <div class="col">
                            <center><NavLink activeClassName='is-active' exact={true} className="nav-link" to="/contact" style={{ color: "white" }}>Contact Us</NavLink></center>
                        </div>
                        <div class="col">
                            <div class="mb-5 flex-center">
                                <a class="fb-ic" style={{padding: "10px"}}>
                                    <i><img src="/static/icons/facebook.png" /></i>
                                </a>

                                <a class="tw-ic" style={{padding: "10px"}}>
                                    <i><img src="/static/icons/Twitter.png" /></i>
                                </a>

                                <a class="tw-ic" style={{padding: "10px"}}>
                                    <i><img src="/static/icons/Instagram.png" /></i>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ border: "1px solid white" }}></hr>
                <div class="row" style={{height: "50px" }}>
                    <div class="col-md-12">
                        <div class="mb-5 flex-center">
                            <a style={{ padding: "10px", color: "white" }}>Terms and Conditions</a>
                            <a style={{ padding: "10px", color: "white" }}>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>



            <div class="footer-copyright text-center" style={{ color: "white" }}>© 2020 Copyright:
                <a href="https://kudosware.com/"> Kudosware.com</a>
            </div>
        </footer>
    );
}

export default Footer;
