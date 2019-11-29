import React, { Component } from "react";
import './MainContent.css';

import TechCarousel from './TechCarousel';
import ServiceDetails from './ServiceDetails';

export default class MainContent extends Component {
    render() {
       return( <div>
       <div className="mainbody">
                  <div className="profileTitle">Full Stack Developer</div>
                  <div className="profileDetail">Helping start-ups, small businesses, and agencies achieve high quality websites and exceptional user experience</div>
               </div>

               <div className="techDetails">
                   <div className="techHeading"> I am good at </div>
                    <TechCarousel />
                    <ServiceDetails />
               </div>
               </div>
               );
    }
}

