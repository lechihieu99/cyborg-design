import React, { Component } from "react";
import imageLeft from './main-containerDetail/images/feature-left.jpg'
import imageRight from './main-containerDetail/images/feature-right.jpg'

import Detail from "./main-containerDetail/details";
import Related from "./main-containerDetail/related";

import './main.css'

class Introduce extends Component {
    render() {
        return(
            <div className="introduceDetail">
                <div className="imageLeft">
                    <img src={imageLeft}></img>
                </div>
                <div className="imageRight">
                    <img src={imageRight}></img>
                </div>
            </div>
        );
    }
}
export default class Main extends Component {
    render() {
        return(
            <div className="main-container detailMain">
                <Introduce />
                <div className="titleDetail">FORNITE DETAILS</div>
                <Detail />
                <Related />
            </div>
        );
    }
}