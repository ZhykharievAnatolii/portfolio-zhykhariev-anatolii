import React from "react";
import './index.css'
export const Main=()=>{
    return(
        <div>
            <div className="card" style={{"width": "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
        </div>
            <div className="card" style={{"width": "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
            </div>
        </div>
    )
}