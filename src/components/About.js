import React from 'react';
import "./components.css";

function About(){
    return(
        <div >
            <h2 className="experience  mt-5 text-center" id="about">ABOUT ME</h2>
            <div className="container mt-5 pb-3"> 
                <div className="box padding-box">
                            <div className="glass"></div>
                            <div className="Skill-content ">
                                Hi I am Ruchika Bhattacharjee. I am a fullstack developer and an ML & DL enthusiast. I am also familiar with Google Cloud Platform. I enjoy coding and always strive to write efficient,clean and reusable code in any language I am familiar with.
                                <br></br>
                                When I am not coding you can find me reading books, binging Netflix or stuck on an assignmnent. Thats all about me and I hope you find this portfolio helpful.
                                <br></br><br></br>
                                Happy Reading!!!   
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default About;