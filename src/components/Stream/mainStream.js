import React, { Component } from "react";
import Livestream from "./main-container stream/livestreamBox";
import PopularStream from "./main-container stream/popularStream";

import './stream.css'

export default class Main extends Component {
    render() {
        return(
            <div className="main-container stream">
                <Livestream />
                <PopularStream />
            </div>
        );
    }
}