import React from 'react';
import "./components.css";


function Experience(){
    return(
        <div >
            <div className="container-fluid container-ex  pt-5 pb-5 px-lg-5">
            <h2 className="experience mb-3 text-center">EXPERIENCES</h2>
                <div className="row container-ex row-cols-lg-3  row-cols-md-2 row-cols-1">
                    
                    <div className="col">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">         
                                    <h3>PSG College of Technology,Coimbatore</h3>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p> 
                                        RESEARCH INTERN | Aug 2020 - Sept 2020
                                        <h6 className="mt-1">Topic - Recommender System - A neural Network Approach</h6> 
                                        <ul>
                                            <li>Tried and tested different types of models to find optimum model for recommender systems.</li>
                                            <li>Models tried are Matrix Factorisation,Multi-layer perceptron,Neural Multi-layer Perceptron</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div className="col">
                        <div class="card">
                            <div class="face face1">
                                <div class="content">
                                    <h3>ZEPHYR SOLUTIONS</h3>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>
                                        INTERN | Jun 2021 - Jul 2021 
                                     <h6 className="mt-1">Topic - Online Examination System with a python Structure</h6> 
                                       <ul className="no-bullet">
                                            <li>Made a online test taking interface for students using django.</li> 
                                            <li>It allows students to give MCQ tests and also it evaluates the answers which were marked correct by the admin.</li>  
                                        </ul> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card">

                            <div class="face face1">
                                <div class="content">
                                    <h3>DON BOSCO SNEHALAYA, GUWAHATI</h3>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p> 
                                        SOCIAL INTERN | Jun 2019 - Jul 2019
                                        <h6 className="mt-1">Topic - Underpriviledged Children</h6>
                                        <ul>
                                           <li>Helped under-priviledged children in this home with education and day-to-day activities</li> 
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Experience;