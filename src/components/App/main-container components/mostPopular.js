import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import './mostPopular.css'
import image1 from './images/popular-01.jpg'
import image2 from './images/popular-02.jpg'
import image3 from './images/popular-03.jpg'
import image4 from './images/popular-04.jpg'
import image5 from './images/popular-05.jpg'
import image6 from './images/popular-06.jpg'
import image7 from './images/popular-07.jpg'
import image8 from './images/popular-08.jpg'

import {FaDownload} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

class PopularBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M'},
        {image : image4 , name : 'CS-GO' , company : 'Legendary', star : '4.8' , download : '2.3M'},
        {image : image5 , name : 'Mini Craft' , company : 'Legendary', star : '4.8' , download : '2.3M'},
        {image : image6 , name : 'Eagles FLy' , company : 'Maxtris Games', star : '4.8' , download : '2.3M'},
        {image : image7 , name : 'Warface' , company : 'Max 3D', star : '4.8' , download : '2.3M'},
        {image : image8 , name : 'Warcraft' , company : 'Legend', star : '4.8' , download : '2.3M'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="popularBox">
                <div className="popularImageBox">
                    <img src={this.objects[this.id].image}></img>
                </div>
                <div className="boxSet">
                    <div id="leftPopularBox">
                        <div id="nameBox">{this.objects[this.id].name}</div>
                        <div id="company">{this.objects[this.id].company}</div>
                    </div>
                    <div id="rightPopularBox">
                        <div id="star"><AiFillStar style={{color : 'yellow'}} size={15} /> {this.objects[this.id].star}</div>
                        <div id="download"><FaDownload style={{color : 'rgb(255, 57, 126)'}} size={15} /> {this.objects[this.id].download}</div>
                    </div>
                </div>
            </div>
                
            </>
        );
    }
}

export default class Popular extends Component {
    render() {
        return(
            <div className="mostPopular">
                <div id="titlePopular">Most Popular Right Now</div>
                <div className="popularContent" id="popularBox">
                    <PopularBox id='0' />
                    <PopularBox id='1' />
                    <PopularBox id='2' />
                    <PopularBox id='3' />
                    <PopularBox id='4' />
                    <PopularBox id='5' />
                    <PopularBox id='6' />
                    <PopularBox id='7' />
                </div>
                <button className="popularButton">Discover Popular</button>
            </div>
        );
    }
}