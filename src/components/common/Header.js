import React, { Component } from 'react';
import './Header.css';
import Logo from './logo.png'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={Logo} alt="logo" className="Header-logo"/>
            </div>
        );
    }
}

export default Header;