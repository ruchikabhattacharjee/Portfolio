import React from 'react';
import "./components.css"
import { Link } from 'react-router-dom';

function Home() {
   
  

    return (
        <div>
            <div className="section">
                <h1 className="name d-none d-sm-none d-md-block">RUCHIKA BHATTACHARJEE</h1>
                <h1 className="name-small d-sm-block d-md-none d-lg-none d-xl-none">RUCHIKA <br></br> BHATTACHARJEE</h1>
            </div>
            <div className="container pb-5 pt-5 mt-5">
                <div className="col-12 col-lg-6 mx-auto text-center ">
                    <h3 className="info">Computer Science and Engineering Student at</h3>
                    <h3 className="info mt-2">ASSAM ENGINEERING COLLEGE</h3>
                </div>
                <div className="text-center mt-5 pb-4 ms-5 home ">
                    
                <a href="#" className="email ms-5"> 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <h5>Scroll Down &nbsp;</h5>                              
                        <svg aria-hidden="true" height="25px" weight="25px" focusable="false" data-prefix="fas" data-icon="arrow-down" class="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>
                       </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;