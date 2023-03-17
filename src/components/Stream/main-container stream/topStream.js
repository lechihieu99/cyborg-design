import React, { Component } from "react";
import image1 from './images/avatar-01.jpg'
import image2 from './images/avatar-02.jpg'
import image3 from './images/avatar-03.jpg'
import image4 from './images/avatar-04.jpg'
import image5 from './images/avatar-01.jpg'

import './topstream.css'
class TopStreamBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M', number : '01'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', number : '02'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', number : '03'},
        {image : image4 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', number : '04'},
        {image : image5 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', number : '05'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="topBox">
                <div className="number">{this.objects[this.id].number}</div>
                <div className="topImageBox">
                    <img src={this.objects[this.id].image}></img>
                </div>
                <div className="inforTop">
                    <div id="nameBox">{this.objects[this.id].name}</div>
                </div>
                <button id="follow">Follow</button>   
            </div>
                
            </>
        );
    }
}
export default class TopStream extends Component {
    render() {
        return(
            <div className="topStream">
                <div className="titleTopStream">Top Streamers</div>
                <div className="streamers">
                    <TopStreamBox id='0'/>
                    <TopStreamBox id='1'/>
                    <TopStreamBox id='2'/>
                    <TopStreamBox id='3'/>
                    <TopStreamBox id='4'/>
                </div>
                
            </div>
        );
    }
}