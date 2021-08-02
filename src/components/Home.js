import React from 'react';
import "./components.css"

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
                <div className="text-center mt-5 pb-4 ms-5 home">
                    <a href="#" className="home-button">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                       Proceed &nbsp;
                       <svg aria-hidden="true" focusable="false" height="32px" weight="32px" data-prefix="fas" data-icon="arrow-circle-down" class="svg-inline--fa fa-arrow-circle-down fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"></path></svg>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;