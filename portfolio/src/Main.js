import React from "react";
import './index.css'
export const Main=()=>{
    return(
        <div>
            <div className="card" style={{"width": "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">Hi, I’m Zhykhariev Anatolii
                        I’m a Frontend developer
                        I’m currently learning JavaScript.
                        I like the chosen field of activity and I have experience in continuous learning.
                        I study every day, and I am happy to learn something new.
                        I'm a disciplined and neat person, I happily spend time learning something new.
                        My previous work from the very beginning organizes me for continuous development, and I am able to quickly remember and use new knowledge in practice.
                        </p>
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