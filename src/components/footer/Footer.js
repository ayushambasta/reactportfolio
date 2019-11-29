import React, { Component } from "react";
import './Footer.css';

export default class Footer extends Component {
    render(){

        return (<div className="footer">
                <div className="hireKey">
                    Let's work together! <span></span>
                </div>
                <div className="footerMain">
                    {/* <div className="footerAbout">
                        
                         <h4>About me:</h4>
                         <br />
                         Enthusiastic Full Stack Developer, who has dedicated career in Web Development.
                         I have 4+ years of experience to help you make your dream real.
                         <br />
                         Let's work together!
                         
                         </div>
                    <div className="footerSocial"></div> 
                    <div className="footerContact">
                        Email:  blosayush@gmail.com
                        <br /><br />
                        Phone: +91 9008304305
                    </div> */}
                    Copyright © 2019 Ayush Saurav.
                </div>
        </div>);
    }
}