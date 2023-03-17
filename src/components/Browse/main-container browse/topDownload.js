import React, { Component } from "react";
import image1 from './images/game-01.jpg'
import image2 from './images/game-02.jpg'
import image3 from './images/game-03.jpg'

import './topDownload.css'

import {FaDownload} from 'react-icons/fa'
import {AiFillStar} from 'react-icons/ai'
class DownloadedBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M'}];
    id = parseInt(this.props.id);
    width = window.innerWidth;
    render() {
        return(
            <>
            <div className="downloadedBox">
                <div className="downloadedImageBox">
                    <img src={this.objects[this.id].image}></img>
                </div>
                <div className="inforBoxDownload">
                    <div id="nameBox">{this.objects[this.id].name}</div>
                    <div id="company">{this.objects[this.id].company}</div>
                    <div id="starAndDownloaded"><AiFillStar style={{color: 'yellow'}} size={20} /> {this.objects[this.id].star} - <FaDownload style={{color : 'rgb(255, 57, 126)'}} size={15} /> {this.objects[this.id].download}</div>
                </div>
                <button id="iconDownload"><FaDownload id="iconDL" size={parseInt(this.width) < 830 ? 15 : 25} /></button>
                
            </div>
                
            </>
        );
    }
}
export default class Download extends Component {
    render() {
        return(
            <div className="downloadedBrowse">
                <div className="titleDownloaded">Top Downloaded</div>
                <div className="download">
                    <DownloadedBox id='0'/>
                    <DownloadedBox id='1'/>
                    <DownloadedBox id='2'/>
                </div>
                <div className="viewMore">View All Games</div>
            </div>
        );
    }
}