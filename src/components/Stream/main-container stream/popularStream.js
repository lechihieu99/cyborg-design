import React, { Component } from "react";
import image1 from './images/avatar-01.jpg'
import image2 from './images/avatar-02.jpg'
import image3 from './images/avatar-03.jpg'
import image4 from './images/avatar-04.jpg'

import livestream1 from './images/stream-01.jpg'
import livestream2 from './images/stream-02.jpg'
import livestream3 from './images/stream-03.jpg'
import livestream4 from './images/stream-04.jpg'
import livestream5 from './images/stream-05.jpg'
import livestream6 from './images/stream-06.jpg'
import livestream7 from './images/stream-07.jpg'
import livestream8 from './images/stream-08.jpg'

import {FaGamepad} from 'react-icons/fa'

import './popularStream.css'
class PopularStreamBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{livestream: livestream1, image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M', streamer : 'Kengan C', title : 'Just Talking With Fans'},
        {livestream: livestream2, image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'LunaMa', title : 'CS-GO 36 Hours Live Stream'},
        {livestream: livestream3, image : image3 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'Areluwa', title : 'Maybe Nathej Allnight Chillin'},
        {livestream: livestream4, image : image4 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', streamer : 'Gangtim', title : 'Live Streaming Till Morning'},
        {livestream: livestream5, image : image1 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'LunaMa', title : 'CS-GO 36 Hours Live Stream'},
        {livestream: livestream6, image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M', streamer : 'Areluwa', title : 'Maybe Nathej Allnight Chillin'},
        {livestream: livestream7, image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', streamer : 'Gangtim', title : 'Live Streaming Till Morning'},
        {livestream: livestream8, image : image4 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M', streamer : 'Gangtim', title : 'Live Streaming Till Morning'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="streamfilePopular">
                <div className="popularImageStreamfile">
                    <img src={this.objects[this.id].livestream}></img>
                    <div id="live">Live</div>
                    <div id="view">1.2K</div>
                    <div id="nameBoxBrowse"><FaGamepad style={{color: 'white'}} size={15} />&nbsp;{this.objects[this.id].name}</div>
                </div>
                <div className="inforBox">
                    <div id="avatarBox">
                        <img src={this.objects[this.id].image}></img>
                    </div>
                    <div className="inforStream streamfile">
                        <div id="streamer">{this.objects[this.id].streamer}</div>
                        <div id="titleStream">{this.objects[this.id].title}</div>
                    </div>
                </div>
                
            </div>
                
            </>
        );
    }
}
export default class PopularStream extends Component {
    render() {
        return(
            <div className="popularStream">
                <div className="titlepopularStream">Most Popular Live Stream</div>
                <div className="popularStr">
                    <div id='leftStr'>
                    <PopularStreamBox id='0'/>
                    <PopularStreamBox id='1'/>
                    <PopularStreamBox id='2'/>
                    <PopularStreamBox id='3'/>
                    </div>
                    <div id='rightStr'>
                    <PopularStreamBox id='4'/>
                    <PopularStreamBox id='5'/>
                    <PopularStreamBox id='6'/>
                    <PopularStreamBox id='7'/>
                    </div>
                    
                </div>
                <button className="buttonMore">Discover All Streams</button>
            </div>
        );
    }
}