import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Nav.css';

export default class Nav extends Component
{    
render() {
    function toggleMenu() {
        var x = document.getElementsByClassName("menu_list")[0];
        if(x.style.display !== "flex") {
            x.style.display = "flex";
        }
        else {
            x.style.display = "none";
        }   
    }
    let name = "</>";
    return (
        <div className="container center">
        <nav>
            <div className="menu_logo">
                <div className="menu_Name">
                    {name}
                </div>
            </div>
            <div className="menu_right">
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="menu_list">
                <Link to='/about' style={{ textDecoration: 'none' }}><li className="menu_list-item">About</li></Link>
                <Link to='/' style={{ textDecoration: 'none' }}><li className="menu_list-item">Portfolio</li></Link>
                <Link to='/blog' style={{ textDecoration: 'none' }}><li className="menu_list-item">Blog</li></Link>
                <Link to='/projects' style={{ textDecoration: 'none' }}><li className="menu_list-item">Projects</li></Link>
                /*<Link to='/notesapp' style={{ textDecoration: 'none', backgroundColor: '#11a8f0' }}><li className="menu_list-item"><i>Note App</i></li></Link>*/
                </ul>
            </div>
        </nav>
    </div>
    );
}
}
