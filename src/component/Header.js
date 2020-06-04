import React from "react";
import logo from "../logo.svg"

class Header extends React.Component {

    render() {
        return (
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo"/>
                    Weather by City
                </header>
        );
    };
}

export default Header;
