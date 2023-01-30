import React from "react";
import './index.css'
export const Footer=()=>{
    return(
        <div className="card text-center">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body ">
                <h5 className="card-title">Want to collaborate?</h5>
                <p className="card-text">How to reach me</p>
                <div className="links d-flex flex-column">
                <a href="https://github.com/ZhykharievAnatolii" className="btn btn-primary">Link to my GitHub page</a>
                <a href="mailto:nekijt87@gmail.com" className="btn btn-primary">email me</a>
                <a href="tel:+30634726870" className="btn btn-primary">call me or send a message</a>
                </div>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}