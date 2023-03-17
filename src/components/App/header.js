import React, { Component } from "react";
import { Link } from "react-router-dom";
import './main-container components/header.css'

import logo from './main-container components/images/logo.png'
import avatar from './main-container components/images/profile-header.jpg'

import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

function Search() {
    return(
        <div className="search">
            <div className="logoSearch"><BsSearch size={20} /></div>
            <input type='text' className="inputSearch" placeholder="Type Something..." ></input>
        </div>
    );
}
class MenuBar extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var id = parseInt(this.props.id);
        if(id < 4)
            document.querySelectorAll('.link')[id].style.color = 'rgb(255, 57, 126)';
        else {
            document.querySelectorAll('.link')[id].style.color = 'white';
            document.getElementById('specialBox').style.backgroundColor = 'rgb(255, 57, 126)';
        }
    }
    handlePage = () => {
        window.location = './profile';
    }
    render() {
        return(
            <div className="menuBar">
                <div><Link className="link" to='/'>Home</Link></div>
                <div><Link className="link" to='/browse'>Browse</Link></div>
                <div><Link className="link" to='/detail'>Details</Link></div>
                <div><Link className="link" to='/stream'>Stream</Link></div>
                <div id="specialBox" className="link" onClick={this.handlePage}>Profile<img src={avatar}></img></div>
            </div>
        );
    }
}
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.getElementById('iconMenu').style.display = 'none';
    }
    render() {
        return(
            <div className="header">
                <div className="logo"><img src={logo}></img></div>
                <Search />
                <MenuBar id={this.props.id} />
                <div id="iconMenu"><GiHamburgerMenu size={30} /></div>
            </div>
        );
    }
}