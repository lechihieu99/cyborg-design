import React, { Component } from "react";
import Feature from "./main-container browse/feature";
import Download from "./main-container browse/topDownload";
import Popular from "./main-container browse/mostPopular";
import { Link } from "react-router-dom";
import './main.css'

import {RiLiveFill} from 'react-icons/ri'
import {MdAirplay} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
export default class Main extends Component {
    
    handlePage = () => {
        window.location = './profile';
    }
    render() {
        return(
            <>
            <div className="mainFeature">
                <div className="box2Components">
                    <Feature />
                    <Download />
                </div>
                
                <div className="howTo">
                    <div className="titleHow">How To Start Your Live Stream</div>
                    <div className="stepBox">
                        <div id="boxHow">
                            <div id="iconHow"><CgProfile style={{color : 'rgb(255, 57, 126)'}} size={30} /></div>
                            <div id="titleHow">Go to Your Profile</div>
                            <div id="subHow">Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.</div>
                        </div>
                        <div id="boxHow">
                            <div id="iconHow"><MdAirplay style={{color : 'rgb(255, 57, 126)'}} size={30} /></div>
                            <div id="titleHow">Live Stream Button</div>
                            <div id="subHow">If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com</div>
                        </div>
                        <div id="boxHow">
                            <div id="iconHow"><RiLiveFill style={{color : 'rgb(255, 57, 126)'}} size={30} /></div>
                            <div id="titleHow">You Are Live</div>
                            <div id="subHow">You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.</div>
                        </div>
                    </div>
                    <button onClick={this.handlePage} className="buttonGoToFile">Go To Profile</button>
                </div>
                <Popular />
            </div>
            </>
        );
    }
}