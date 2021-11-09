import React from 'react';
import "./components.css"

function Skills(){
    return(
        <div>
            <div className="container">                 
                <div className="row"> 
                <h2 className="experience mb-3 text-center">SKILLS</h2>  
                    <div className="col">    
                        
                        <div className="box padding-box">
                            <div className="glass"></div>
                            <div className="Skill-content ">
                                <h3>
                                    Languages
                                </h3>
                                <h6 >
                                    <ul>
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </h6>
                            </div>
                        </div>
                    </div> 

                    <div className="col">    
                        
                        <div className="box">
                            <div className="glass"></div>
                            <div className="Skill-content">
                                <h3>
                                   Frameworks
                                </h3>
                                <h6>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Bootstrap</li>
                                        <li>ExpressJS</li>
                                        <li>ReactJs</li>
                                        <li>NodeJS</li>
                                    </ul>
                                </h6>
                            </div>
                        </div>
                    </div> 

                    <div className="col">    
                        
                        <div className="box padding-box">
                            <div className="glass"></div>
                            <div className="Skill-content ">
                                <h3>
                                   Tools
                                </h3>
                                <h6>
                                    <ul>
                                        <li>MongoDB</li>
                                        <li>MySQL</li>
                                        <li>Git</li>
                                        <li>GCP</li>
                                        <li>Visual Studio Code</li>
                                    </ul>                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Skills;