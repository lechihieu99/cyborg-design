import React, { Component } from "react";
import './introduce.css';

import { Link } from "react-router-dom";

export default class Introduce extends Component {
    handlePage = () => {
        window.location = './browse';
    }
    render() {
        return(
            <div className="introduce">
                <div id="welcome">Welcome to Cyborg</div>
                <div id="titleIntroduce">BROWSE OUR POPULAR GAMES HERE</div>
                <div onClick={this.handlePage} id="buttonBrowse">Browse Now</div>
            </div>
        );
    }
}