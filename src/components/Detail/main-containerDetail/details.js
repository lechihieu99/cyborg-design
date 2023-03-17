import React, { Component } from "react";
import details1 from './images/details-01.jpg'
import details2 from './images/details-02.jpg'
import details3 from './images/details-03.jpg'

import './detail.css'

import {FaDownload} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
import {FaMemory} from 'react-icons/fa'
import {FaGamepad} from 'react-icons/fa'

function InforBoxLeft() {
    return(
        <div className="inforBoxLeft">
            <div className="leftBoxLeft">
                <div id="nameBox">Fornite</div>
                <div id="company">Sandbox</div>
            </div>
            <div className="rightBoxLeft">
                <div id="star"><AiFillStar style={{color: 'yellow'}} size={20} />&nbsp;&nbsp;4.8</div>
                <div id="download"><FaDownload style={{color: 'rgb(255, 57, 126)'}} size={20} />&nbsp;&nbsp;2.3M</div>
            </div>
        </div>
    );
}

function InforBoxRight() {
    return(
        <div className="boxRight">
            <div id="star"><AiFillStar style={{color: 'yellow'}} size={20} /><br/>4.8</div>
            <div id="download"><FaDownload style={{color: 'rgb(255, 57, 126)'}} size={20} /><br/>2.3M</div>
            <div id="size"><FaMemory style={{color: 'rgb(255, 57, 126)'}} size={20} /><br/>36GB</div>
            <div id="kindofGame"><FaGamepad style={{color: 'rgb(255, 57, 126)'}} size={20} /><br/>Action</div>
        </div>
    );
}

export default class Detail extends Component {
    render() {
        return(
            <div className="detail">
                <div className="gridDetail">
                    <InforBoxLeft />
                    <InforBoxRight />
                </div>
                <div className="gridDetail2">
                    <div className="detail1"><img src={details1}></img></div>
                    <div className="detail2"><img src={details2}></img></div>
                    <div className="detail3"><img src={details3}></img></div>
                </div>
                <div className="textDetail">Cyborg Gaming is free HTML CSS website template provided by TemplateMo. 
                This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] 
                templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. 
                Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</div>
                <button className="buttonDownload">Download Fornite Now!</button>
            </div>
        );
    }
}