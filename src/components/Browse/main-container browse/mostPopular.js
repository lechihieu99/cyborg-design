import React, { Component } from "react";
import image1 from './images/avatar-01.jpg'
import image2 from './images/avatar-02.jpg'
import image3 from './images/avatar-03.jpg'
import image4 from './images/avatar-04.jpg'

import livestream1 from './images/stream-01.jpg'
import livestream2 from './images/stream-02.jpg'
import livestream3 from './images/stream-03.jpg'
import livestream4 from './images/stream-04.jpg'

import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FaGamepad} from 'react-icons/fa'

import './most.css'
class PopularBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{livestream: livestream1, image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M', streamer : 'Kengan', title : 'Just Talking With Fans'},
        {livestream: livestream2, image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'LunaMa', title : 'CS-GO 36 Hours Live Stream'},
        {livestream: livestream3, image : image3 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'Areluwa', title : 'Maybe Nathej Allnight Chillin'},
        {livestream: livestream4, image : image4 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', streamer : 'Gangtim', title : 'Live Streaming Till Morning'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="popularBoxBrowse">
                <div className="popularImageBoxBrowse streamImageBox">
                    <img src={this.objects[this.id].livestream}></img>
                    <div id="live">Live</div>
                    <div id="view">1.2K</div>
                    <div id="nameBoxBrowse"><FaGamepad style={{color : 'white'}} size={20} />&nbsp;&nbsp;{this.objects[this.id].name}</div>
                </div>
                <div className="inforBox box2">
                    <div id="avatarBox">
                        <img src={this.objects[this.id].image}></img>
                    </div>
                    <div className="inforStream">
                        <div id="streamer"><BsFillCheckCircleFill className="streamer" style={{color : 'rgb(255, 57, 126)'}} size={20} />&nbsp;&nbsp;{this.objects[this.id].streamer}</div>
                        <div id="titleStream">{this.objects[this.id].title}</div>
                    </div>
                </div>
                
            </div>
                
            </>
        );
    }
}
export default class Popular extends Component {
    handlePage = () => {
        window.location = './stream';
    }
    render() {
        return(
            <div className="popularBrowse">
                <div className="titleFeature">Most Popular Live Stream</div>
                <div className="popular">
                    <PopularBox id='0'/>
                    <PopularBox id='1'/>
                    <PopularBox id='2'/>
                    <PopularBox id='3'/>
                </div>
                <button onClick={this.handlePage} className="buttonStream">Discover All Streams</button>
            </div>
        );
    }
}