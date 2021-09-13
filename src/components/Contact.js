import React from 'react'
import '../css/homepage.css'
import { NavLink } from 'react-router-dom';

function Contact() {
    return (
        <div id="contact" className="contact container" style={{ position: "relative", top: "5%", height: "70vh"}}>
            <h1 style={{ color: "white" }}>Contact Us</h1>
            <br>
            </br>
            <br></br>
            <div className="row">
                <div className="col-md" style={{ color: "white", textAlign: "left" }}>
                    <h3>Get in Touch</h3>
                    <p style={{color: "white", fontSize: "16px"}}>
                        We would love to hear from you. Feel free to drop us an email 
                        </p>
			<p style={{color: "white", fontSize: "16px"}}>and take your first step toward financial independence.</p>

                    <h4>Collaborate</h4>
                    <p style={{color: "white", fontSize: "16px"}}>
                      contact@CCJ.com                       
                    </p>
                </div>


                <div className="col-md">
                    
                    <form>

                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Full Name" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control" name="message" placeholder="Message" rows="3"></textarea>
                        </div>

                        <center><button type="submit" className="btn" style={{backgroundColor: "#9D512E", width: "200px", color: "white"}}>Send</button></center>
                    </form>
                </div>
            </div>
            <br></br><br></br>
            <br></br><br></br>
        </div>
    );
}

export default Contact;
