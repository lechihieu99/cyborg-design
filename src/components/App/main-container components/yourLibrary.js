import React, { Component } from "react";
import game1 from './images/game-01.jpg'
import game2 from './images/game-02.jpg'
import game3 from './images/game-03.jpg'

import { Link } from "react-router-dom";
import LibraryBox from "./libraryBoxPopular";
import './library.css'


export default class Library extends Component {
    
    render() 
    {
        return(
            <div className="library">
                <div id="titleLibrary">Your Gaming Library</div>
                <div className="libraryList">
                    <LibraryBox id='0' />
                    <LibraryBox id='1' />
                    <LibraryBox id='2' />
                </div>
                <Link className="buttonLibrary" to='/cyborg-design/profile'><div>View Your Library</div></Link>
            </div>
        );
    }
}