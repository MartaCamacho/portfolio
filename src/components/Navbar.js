import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    state = {
        toggle:false,
    }

    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

render () {
        return (
            <>
            <div className="logo">
            <div><a className="logo-link" href="#home"><i className="fas fa-arrow-circle-up"></i></a></div>
            <div><a className="logo-link" href="#footer"><i className="far fa-comment"></i></a></div>
            </div>
            <button onClick={() => this.Toggle()} className={this.state.toggle ? 'nav-toggle nav-open' : "nav-toggle" } aria-label="toggle navigation">
                <span className={this.state.toggle ?  'hamburger nav-open' : "hamburger" }></span>
            </button>
            <nav className={this.state.toggle ?  'nav nav-open' : "nav" } id={this.state.toggle ?  'nav-open' : "" }>
                <ul className={this.state.toggle ? 'nav-list nav-open' : 'nav-list'} >
                    <li className="nav-item"><a onClick={() => this.Toggle()} href="#home" className="nav-link">Home</a> </li>
                    <li className="nav-item"><a onClick={() => this.Toggle()} href="#what-i-do" className="nav-link">What I do</a> </li>
                    <li className="nav-item"><a onClick={() => this.Toggle()} href="#about" className="nav-link">About me</a> </li>
                    <li className="nav-item"><a onClick={() => this.Toggle()} href="#work" className="nav-link">My projects</a> </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar;