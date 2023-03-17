import React, { Component } from "react";
import game1 from './images/game-01.jpg'
import game2 from './images/game-02.jpg'
import game3 from './images/game-03.jpg'

import './library.css'


export default class LibraryBox extends Component {
    constructor(props) {
        super(props);
    }
    data = [{image : game1 , name : 'Dota2' , company : 'Sandbox', date : '24/08/2036' , hour : '634H 22Mins'},
    {image : game2 , name : 'Fornite' , company : 'Sandbox', date : '24/08/2036' , hour : '634H 22Mins'},
    {image : game3 , name : 'CS-GO' , company : 'Sandbox', date : '24/08/2036' , hour : '634H 22Mins'}];

    id = parseInt(this.props.id);
    render() {
        return(
            <>
                <div className="libraryBox">
                    <div className="libraryImageBox"> <img src={this.data[this.id].image}></img> </div>
                    <div className="sameBox number1">
                        <div id="nameLibraryBox">{this.data[this.id].name}</div>
                        <div id="companyLibraryBox">{this.data[this.id].company}</div>
                    </div>
                    <div className="sameBox">
                        <div id="titleLib">Date Added</div>
                        <div id="subLib">{this.data[this.id].date}</div>
                    </div>
                    <div className="sameBox">
                        <div id="titleLib">Hour Played</div>
                        <div id="subLib">{this.data[this.id].hour}</div>
                    </div>
                    <div className="sameBox">
                        <div id="titleLib">Currently</div>
                        <div id="subLib">Downloaded</div>
                    </div>
                    <button id="buttonDownload">Downloaded</button>
                </div>
            </>
        );
    }
}