import React, { Component } from "react";
import Introduce from "./main-container components/introduceBox";
import Popular from "./main-container components/mostPopular";
import Library from "./main-container components/yourLibrary";
import './main.css';

export default class Main extends Component {
    render() {
        return(
            <div className="main-container">
                <Introduce />
                <Popular />
                <Library />
            </div>
        );
    }
}