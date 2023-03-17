import React, { Component } from "react";
import clip1 from './images/clip-01.jpg'
import clip2 from './images/clip-02.jpg'
import clip3 from './images/clip-03.jpg'
import clip4 from './images/clip-04.jpg'

import {BsEyeFill} from 'react-icons/bs'

import {AiFillPlayCircle} from 'react-icons/ai'

export default class ClipBox extends Component {
    constructor(props) {
        super(props);
    }

    objects = [{image : clip1 , name : 'First Clip' , view : '250'},
    {image : clip2 , name : 'Second Clip' , view : '183'},
    {image : clip3 , name : 'Third Clip' , view : '141'},
    {image : clip4 , name : 'Fourth Clip' , view : '91'}];

    id = parseInt(this.props.id);
    render() {
        return(
            <div className="clipsBox">
                <div className="imageClip">
                    <img src={this.objects[this.id].image}></img>
                    <a href="http://youtube.com"><AiFillPlayCircle size={30} /></a>
                </div>
                <div className="contentClip">
                    <div id="numberClip">{this.objects[this.id].name}</div>
                    <div id="viewClip"><BsEyeFill style={{color : 'white'}} size={20} />&nbsp;{this.objects[this.id].view}</div>
                </div>
            </div>
        );
    }
}