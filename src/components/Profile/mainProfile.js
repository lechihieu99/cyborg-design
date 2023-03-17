import React, { Component } from "react";
import profile from './main-container profile/images/profile.jpg'
import ClipBox from "./main-container profile/popularClip";
import LibraryBox from "../App/main-container components/libraryBoxPopular";

import './mainprofile.css'

export default class MainProfile extends Component {
    render() {
        return(
            <div className="main-container mainProfile">
                <div className="moreInfor">
                    <div className="avatarProfile">
                        <img src={profile}></img>
                    </div>
                    <div className="information">
                        <button className="buttonStatus">Offline</button>
                        <div className="nameProfile">Alan Smithee</div>
                        <div className="textProfile">You Haven't Gone Live yet. Go Live By Touching The Button Below.</div>
                        <button className="buttonStartLive">Start Live Stream</button>
                    </div>
                    <div className="parentBoxProfile">
                        <div className="boxProfile">
                            <div id="listProfile">
                                <div id="left">Games Downloaded</div>
                                <div id="right">3</div>
                            </div>
                            <div id="listProfile">
                                <div id="left">Friends Online</div>
                                <div id="right">16</div>
                            </div>
                            <div id="listProfile">
                                <div id="left">Live Streams</div>
                                <div id="right">None</div>
                            </div>
                            <div id="listProfile">
                                <div id="left">Clips</div>
                                <div id="right">29</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="clipsContent">
                        <div id="titleClips">Your Most Popular Clips</div>
                        <div className="clips">
                            <ClipBox id='0' />
                            <ClipBox id='1' />
                            <ClipBox id='2' />
                            <ClipBox id='3' />
                        </div>
                        <button className="loadMore">Load More Clips</button>
                        
                    </div>
                </div>
                <div className="libraryProfile">
                    <div className="titleLibraryProfile">Your Gaming Library</div>
                    <div className="libraryBoxProfile">
                        <LibraryBox id='0' />
                        <LibraryBox id='1' />
                        <LibraryBox id='2' />
                    </div>
                </div>
            </div>
        );
    }
}