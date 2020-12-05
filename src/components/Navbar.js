import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    state = {
        toggle:false,
    }


    // const navToggle = document.querySelector('.nav-toggle');
    // const navLinks = document.querySelectorAll('.nav-link');
    
    // navToggle.addEventListener('click', () => {
    //   document.body.classNameList.toggle('nav-open');
    // });

    // navLinks.foreach(link => {
    //   link.addEventListener('click', () => {
    //     document.body.classList.remove('nav-open');
    //   })
    // })


    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
        console.log(this.state.toggle, 'el estate')
    }
    

render () {
        return (
            <>
            <div className="logo">
            <img src="" alt="my logo" />
            </div>
            <button onClick={() => this.Toggle()} className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className={this.state.toggle ? 'nav-list nav-open' : 'nav-list'} >
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a> </li>
                    <li className="nav-item"><a href="#sevices" className="nav-link">My services</a> </li>
                    <li className="nav-item"><a href="#about" className="nav-link">About me</a> </li>
                    <li className="nav-item"><a href="#work" className="nav-link">My work</a> </li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar;