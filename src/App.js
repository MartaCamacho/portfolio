import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export default class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      arrayPics: [
      "../images/vertical-picture.jpg",
      "../images/vertical-picture-2.jpg",
      "../images/vertical-picture-3.jpg",
      ]
    };
}

  randomImage = () => {
     const randomPic = Math.floor((Math.random()) * (this.state.arrayPics.length));
     const objPic = this.state.arrayPics[randomPic];
     return  objPic 
  }

  render() {
    console.log("I see you are inspecting this page...👮 if you have any questions or advice to improve it, I will be very happy to receive your message! 📬 contacto@martacamacho.com")
  return (
    <div className="root">
      <header>
        <Navbar />
      </header>

      <section className="intro" data-aos="fade-left" data-aos-duration="1000" id="home">
          <h1 className="section-title section-title-intro">
            Hello, I am <strong>Marta Camacho</strong>
          </h1>
            <p className="section-subtitle section-subtitle-intro">Full Stack Developer</p>
            <img className="intro-img" src="/images/FotoIH.jpg" alt="me" />
            <img className="intro-img-surprise" src="/images/hoverImage.jpg" alt="me" />
      </section>

      <section className="my-services" data-aos="fade-left" data-aos-duration="3000" id="what-i-do">
        <h2 className="section-title section-title-services"> What I do</h2>
            <div className="services">
              <div className="service">
                  <h3>Frontend </h3>
                  <p>I have knowledge in HTML5, CSS3, JavaScript (ES6) and React, 
                  that give me the ability to create format and layout a web. </p>
              </div>
              <div className="service">
                  <h3>+ Backend </h3>
                  <p> I also have worked with Express, Node, MongoDB and Axios, 
                  so I can save data into servers and extract information to be rendered.</p>
              </div>
              <div className="service">
                  <h3>= Full Stack</h3>
                  <p> Putting these two things together make me a Full Stack
                  Developer (in fact, this website it built with both of them ✨).</p>
              </div>
            </div>
          <a href="#work" className="btn">My projects</a>
          <br/>
          <a href="https://bit.ly/3lWiuzv" className="btn" target="_blank" rel="noreferrer">CV</a>
      </section>
            
      <section className="about-me" data-aos="fade-left" data-aos-duration="2000" id="about">
          <h2 className="section-title section-title-about">About me</h2>
          <p className="section-subtitle section-subtitle-about">Developer based in Barcelona</p>
          <div className="about-me-body">
            <p>Born and raised in Granada, I moved to Barcelona in 2013 to accomplish 
            my dream of working on the tourism industry and fell in love with the city.
            I consider myself a demanding, perseverant and enthusiastic person, who works 
            every day to accomplish her goals.
            <br/><br/>
            After 7 years on hospitality, I have worked on different positions that 
            gave me new abilities (such as working under pressure, customer care, 
            commercial skills, negotiating skills and team work, among others) and, above all, to 
            understand better how things that depend of another department work 
            (and that many times we do not take into account when something is not 
            delivered correctly/on time). 
            <br/><br/>
            This year I decided to do a career change, I have stopped and thought about 
            what I wanted now, and I realized that I love developing and I see myself 
            doing this in the future, time flies when I am doing it and I am interested 
            and entertained as well, so I decided to do a bootcamp and acquire the necessary 
            knowledge to begin my path as a full stack developer 🚀
            </p>
            
          </div>
          <img className="about-me-image" src={this.randomImage()} alt=""/>
      </section>


      <Projects />

      <Footer/>

    </div>
  );
}
}
