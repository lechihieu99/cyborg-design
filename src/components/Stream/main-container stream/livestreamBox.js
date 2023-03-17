import React, { Component } from "react";
import image1 from './images/featured-01.jpg'
import image2 from './images/featured-02.jpg'
import image3 from './images/featured-03.jpg'

import './livestream.css'

import {FaDownload} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'

import TopStream from "./topStream";
class LivestreamBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="livestreamBox">

                <div className="livestreamImageBox">
                    <img src={this.objects[this.id].image}></img>
                    <div id="streaming">2.4K Streaming</div>
                </div>

                <div className="livestreamInfor">
                    <div className="inforLeft">
                        <div id="nameBox">{this.objects[this.id].name}</div>
                        <div id="company">{this.objects[this.id].company}</div>
                    </div>
                    <div className="inforRight">
                        <div id="star"><AiFillStar style={{color: 'yellow'}} size={13} />&nbsp;{this.objects[this.id].star}</div>
                        <div id="download"><FaDownload style={{color: 'rgb(255, 57, 126)'}} size={13} />&nbsp;{this.objects[this.id].download}</div>
                    </div>
                </div>
                
            </div>
                
            </>
        );
    }
}
export default class Livestream extends Component {
    render() {
        return(
            <div className="headMain">
                <div className="livestreamLeft">
                    <div className="titleLivestream">Live Streams</div>
                    <div className="livestream">
                        <LivestreamBox id='0'/>
                        <LivestreamBox id='1'/>
                        <LivestreamBox id='2'/>
                    </div>
                </div>  

                <div className="topStreamRight">
                    <TopStream />
                </div>          
            </div>
            
        );
    }
}