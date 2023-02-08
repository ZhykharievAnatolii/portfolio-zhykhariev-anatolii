import React from "react";
import './index.css';
import Photo from './assets/myfoto.jpg'
import Certificate from './assets/certificatemarkup.png'
export const Main=()=>{
    return(
        <div>
            <div className="card" style={{"width": "18rem"}}>
            <img src={Photo} className="card-img-top" alt="my photo"/>
                <div className="card-body">
                    <p className="card-text">Hi, I’m Zhykhariev Anatolii
                        I’m a Frontend developer
                        I’m currently learning JavaScript.
                        I like the chosen field of activity and I have experience in continuous learning.
                        I study every day, and I am happy to learn something new.
                        I'm a disciplined and neat person, I happily spend time learning something new.
                        My previous work from the very beginning organizes me for continuous development,
                        and I am able to quickly remember and use new knowledge in practice.
                        </p>
                </div>
        </div>
            <div className="card" style={{"width": "18rem"}}>
                <img src="{Certificate}" className="card-img-top" alt="certificate"/>
                <div className="card-body">
                    <p className="card-text">
                        I have already finished a course about
                        JavaScript, Node, React, HTML, CSS,
                        and have knowledge about the structure and how it works.</p>
                </div>
            </div>
        </div>
    )
}