import React, { Component } from "react";
import Switch, { Case, Default } from 'react-switch-case';

import './Blog.css';
import BlogOne from './BlogOne';
import BlogTwo from './BlogTwo';
import BlogThree from './BlogThree';
import BlogFour from './BlogFour';

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            key: "0"
        };
    }
    render(){
        return(<div>
            <div className="blogHead"> 
            <h2>Articles </h2>
            {/* <br /> */}
            Food for Brain
            </div>
            <div className="blogDetails">
            <div className="sideMenu">


            </div>

            <div className="mainContent">
            <Switch condition={this.state.key }>
                <Case value="1">
                       <div> <BlogOne /></div>
                </Case>
                <Case value="2">
                       <div> <BlogTwo /></div>
                </Case>
                <Case value="3">
                       <div> <BlogThree /></div>
                </Case>
                <Case value="4">
                       <div> <BlogFour /></div>
                </Case>
                <Default>
                    <span>Nothing!</span>
                </Default>
            </Switch>
            
            </div>
            </div>
            </div>
            );
    }
}