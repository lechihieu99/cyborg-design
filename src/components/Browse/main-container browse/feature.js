import React, { Component } from "react";
import image1 from './images/featured-01.jpg'
import image2 from './images/featured-02.jpg'
import image3 from './images/featured-03.jpg'
import popular8 from './images/popular-08.jpg'
import popular4 from './images/popular-04.jpg'


import './feature.css'
class FeatureBox extends Component {
    constructor(props) {
        super(props);
    }
    objects = [{image : image1 , name : 'Fornite' , company : 'Sandbox', star : '4.8' , download : '2.3M'},
        {image : image2 , name : 'PUBG' , company : 'Battel S', star : '4.8' , download : '2.3M'},
        {image : image3 , name : 'Dota2' , company : 'Steam-X', star : '4.8' , download : '2.3M'},
        {image : popular8 , name : 'LOL' , company : 'Riot', star : '4.8' , download : '2.3M'},
        {image : popular4 , name : 'Genshin' , company : 'Tencent', star : '4.8' , download : '2.3M'}];
    id = parseInt(this.props.id);
    
    render() {
        return(
            <>
            <div className="featureBox">
                <div className="featureImageBox">
                    <img src={this.objects[this.id].image}></img>
                </div>
                <div className="inforBox">
                    <div className="leftInfor">
                        <div id="nameBox">{this.objects[this.id].name}</div>
                        <div id="company">{this.objects[this.id].company}</div>
                    </div>
                    <div className="rightInfor">
                        <div id="star">{this.objects[this.id].star}</div>
                        <div id="download">{this.objects[this.id].download}</div>
                    </div>
                </div>
                
            </div>
                
            </>
        );
    }
}
export default class Feature extends Component {
    example;
    componentDidMount() {
        this.example = setInterval(this.note , 3000);
    }
    note = () => {
        console.log('hello');
        let lists = document.querySelectorAll('.featureBox');
        document.getElementById('feature').append(lists[0]);
    }
    componentWillUnmount() {
        clearInterval(this.example);
    }
    render() {
        return(
            <div className="featureBrowse">
                <div className="titleFeature">Featured Games</div>
                <div className="feature" id="feature">
                <FeatureBox id='0'/>
                <FeatureBox id='1'/>
                <FeatureBox id='2'/>
                <FeatureBox id='3'/>
                <FeatureBox id='4'/>
                </div>
                
            </div>
        );
    }
}