import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import image1 from './images/game-01.jpg'
import image2 from './images/game-02.jpg'
import image3 from './images/game-02.jpg'
import image4 from './images/game-03.jpg'
import image5 from './images/game-03.jpg'
import image6 from './images/game-01.jpg'

import './related.css'

import {FaDownload} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

class RelatedBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M'},
        {image : image4 , name : 'CS-GO' , company : 'Legendary', star : '4.8' , download : '2.3M'},
        {image : image5 , name : 'Mini Craft' , company : 'Legendary', star : '4.8' , download : '2.3M'},
        {image : image6 , name : 'Eagles FLy' , company : 'Maxtris Games', star : '4.8' , download : '2.3M'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="relatedBox">
                <div className="relatedImageBox">
                    <img src={this.objects[this.id].image}></img>
                </div>
                <div className="boxInfor1">
                    <div id="nameBox">{this.objects[this.id].name}</div>
                    <div id="company">{this.objects[this.id].company}</div>
                </div>
                <div className="boxInfor2">
                    <div id="star"><AiFillStar style={{color: 'yellow'}} size={20} />&nbsp;{this.objects[this.id].star}</div>
                    <div id="download"><FaDownload style={{color: 'rgb(255, 57, 126)'}} size={20} />&nbsp;{this.objects[this.id].download}</div>
                </div>
                
            </div>
                
            </>
        );
    }
}

export default class Related extends Component {
    render() {
        return(
            <div className="related">
                <div className="titleRelated">Other Related Games</div>
                <div className="allRelatedBox">
                    <RelatedBox id='0'/>
                    <RelatedBox id='1'/>
                    <RelatedBox id='2'/>
                    <RelatedBox id='3'/>
                    <RelatedBox id='4'/>
                    <RelatedBox id='5'/>
                </div>
            </div>
        );
    }
}