import React from 'react'
import { NavLink } from 'react-router-dom';

function Save() {
    return (
        <div className="container" style={{ position: "relative", top: "5%", overflow: "auto", display: "table", paddingBottom: "10px" }}>
            <h1 style={{ color: "white" }}>Saved Files</h1>
            <br>
            </br>
            <br></br>
            <div className="row">
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body" style={{width: "100%"}}>
                        <h5 className="card-title">Saved Files</h5>
                    </div>
                    <ul className="list-group list-group-flush text-left" style={{width: "100%"}}>
                        <li className="list-group-item" style={{width: "100%"}}>File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                        <li className="list-group-item">File <a href="#" className="text-right">Get file</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Save;
