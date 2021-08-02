import React from 'react';
import "./components.css";

function Projects(){
    return(
        <div>
            <h2 className="experience mb-3 mt-5 text-center">PROJECTS</h2> 
            <div className="body-pr ">
             
                <div className="projects ">
               
                    <div className="">
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>Chess Website</h2>
                                <p>
                                    <div className="pr">HTML | CSS | JavaScript</div>
                                    <div className=" mt-3 mb-4" >
                                        Built a static website for AEC Chess Club using HTML,CSS and Javascript
                                    
                                        Site Link - <a href="https://aeccShessclub.games/">AEC CHESS CLUB</a>
                                       
                                    </div>     
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>MERN Login</h2>
                                <p>
                                    <div className="pr">MongoDB | ExpressJS | ReactJS | NodeJS </div>
                                   <div className=" mt-3 mb-4">
                                        Simple Login and Signup website to understand the working of the backend.
                                   </div>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>Unity AR Project</h2>
                                <p>
                                    <div className="pr">Unity | C#</div>
                                    <div>
                                        Built an AR app which allows you to spawn, translate, scale, and rotate the objects. It includes surface occlusion, light estimation, Screen recording.
                                    </div>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="Projects-box">
                            <span></span>
                            <div className="projects-content">
                                <h2>Portfolio</h2>
                                <p>
                                    <div className="pr">ReactJS | ThreeJS</div>
                                   <div className=" mt-3 mb-4">
                                        Simple Portfolio which helps to know about my experiences, skills and projects done  and also helps display the skills I have.
                                   </div>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
 export default Projects;