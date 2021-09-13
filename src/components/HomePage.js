import React from 'react'
import '../css/homepage.css'
import { NavLink } from 'react-router-dom';


function HomePage() {
    
    return (
        <div className="container" style={{ width: "70%", position: "relative", top: "30%" }}>
            <h1 style={{ fontSize: "3em", color: "white" }}>COURT CASE JOURNAL</h1>
            <br></br>
            <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 lime-border" type="text" placeholder="Search" aria-label="Search" />
                <button style={{ width: "100px", backgroundColor: "#574F22" }} ><img src="/static/icons/search.png"/></button>
            </div>
        </div>
    );
}

export default HomePage;
