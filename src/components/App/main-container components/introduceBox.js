import React, { Component } from "react";
import './introduce.css';
import { Link } from "react-router-dom";


export default class Introduce extends Component {
    render() {
        return(
            <div className="introduce">
                <div id="welcome">Welcome to Cyborg</div>
                <div id="titleIntroduce">BROWSE OUR POPULAR GAMES HERE</div>
                <Link id="buttonBrowse" to='/cyborg-design/browse'><div id="copyButtonBrowse">Browse Now</div></Link>
            </div>
        );
    }
}