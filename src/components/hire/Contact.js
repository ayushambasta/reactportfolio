import React, { Component } from "react";

import './Contact.css';

import PPImage from '../../assets/portfolio_img.jpg';

import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/js.png';
import Node from '../../assets/node.png';
import RecatImg from '../../assets/react.png';
import WordPress from '../../assets/wordpress.png';


export default class Contact extends Component {
    render(){
        return(<div>
            <div className="hireHead"> 
            <h2>About Ayush </h2>
            {/* <br /> */}
            Professional Web Developer
            </div>
            <div className="hireDetails">
            <img class="alignLeft" src={PPImage} width="140" height="140"/>
            <div className="paraDetails">I am a Full Stack Developer, providing end to end service to the client.
             I have 4 years of commercial experience providing 
            full stack development, producing high quality responsive websites, 
            exceptional user experience and end-to-end functionalities for your business need.</div>
           
            <div class="clear"></div>
            <div className="paraDetails secondPara" >
            Clients often approach me when they need a developer who can provide:
            <br /><br />
                <ul>
                    <li> Responsive HTML/CSS</li>
                    <li> JavaScript (vanilla, React/Redux, jQuery, etc)</li>
                    <li> MERN Stack Developement</li>
                    <li> MEAN Stack Developement</li>
                    <li> Business Functionality Developement</li>
                    <li> Mobile App (ReactNative) Developement</li>
                    <li> Game Developement</li>
                    <li> High-level user experience</li>
                    <li> Best practices</li>
                    <li> Performance</li>
                    <li> Animation</li>
                    <li> Git</li>
                    <li> WordPress</li>
                </ul>
            </div>
            
            <div className="paraDetails secondPara">
            The work I provide is of highest quality, fully responsive, 
            and tested in a wide range of devices. I take great care to 
            ensure each project is well-documented and easily maintainable 
            so you can enhance a website as your company grows.
                <br /> <br />
            Often end-to-end development of a website is overlooked, but being 
            the part of your project that combines design, back-end development 
            and the layer that your users interact with, from my experience, 
            it is the most important to get right.
            </div>

            <h1>Skills</h1>
            <div className="paraDetails secondPara">
            I have many years of experience as a full-stack developer, 
            creating quality responsive websites.
            <br /><br />
            In my experience as a freelancer and working for agencies 
            I have obtained an eye for detail and better appreciation for design, 
            knowledge of integration and developing server-side, 
            as well as knowing how to efficiently manage project and 
            work with clients and colleagues smoothly.
            <br /><br />
            I am specialised in full-stack development and my knowledge 
            of multiple fields allows me to work on a project with the 
            full scope in mind, easing the process of our working 
            together and producing a more cohesive experience for your users.
            </div>

            <div className="imgSkill">
                <div className="imgCover"><img class="imgSkillSrc" src={Html} width="90" height="100"/></div>
                <div className="imgCover"><img class="imgSkillSrc" src={Css} width="90" height="100"/></div>
                <div className="imgCover"><img class="imgSkillSrc" src={Js} width="90" height="100"/></div>
                <div className="imgCover"><img class="imgSkillSrc" src={Node} width="90" height="100"/></div>
                <div className="imgCover"><img class="imgSkillSrc" src={RecatImg} width="90" height="100"/></div>
                <div className="imgCover"><img class="imgSkillSrc" src={WordPress} width="90" height="100"/></div>
            </div>

            <h1>Let's Work Together</h1>
            <div className="paraDetails secondPara">
            If you’d like to hire me for your precious dream. 
            We can set up a call to discuss how I can add most value to your project.
            <br /><br />
            For Further inquiry, Please drop a mail to or Whatsapp/call me:
            <br />
            <i>Email:</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>blosayush@gmail.com</b> <br />
            <i>Whatsapp/Call:</i>&nbsp;&nbsp;<b>+91 9008304305</b>
            </div>
            </div>
            </div>
            );
    }
}