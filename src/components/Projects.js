import React, { Component } from 'react';
import service from "../lib/service";

export default class Projects extends Component {

    constructor(){
        super();
        this.state = { 
            listOfProjects: [],
            projectsBackUp: [
                {
                    title: "rALo Website",
                    description: "This is a simple presentation website I have made for a friend, SEO friendly.",
                    url: "http://www.yosoyralo.com/",
                    used: "NextJs (with hooks), JavaScript, CSS3, HTML5, Github, "
                },
                {
                    title: "Not Yet Website",
                    description: "This is a personal website for a comic trio, with youtube and spotify embeded.",
                    url: "http://www.notyet.es/",
                    used: "React (with hooks), styled components, JavaScript, CSS3, react scroll, Github, Netlify"
                },
                {
                    title: "Movie Finder",
                    description: "Movie finder is the ideal app for finding that movie you are thinking of, save it as favourite and see its details, all in one place!",
                    url: "https://movie---finder.herokuapp.com/",
                    used: "HTML5, CSS3, JavaScript, React (with hooks), Fetch, GitHub"
                },
                {
                    title: "FitLine",
                    description: "Fitline was born during the covid restrictions for sport lovers who don't want to leave their sport routine behind. In this App you will find the best home workouts, a filtered search between them and a montly calendar that will help you achieve the perfect body for this summer. Also, you will be able to save the videos you loved on your profile, as well as add videos to the community with your favourite workouts.",
                    url: "https://fitline.herokuapp.com/",
                    used: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub"
                },
                {
                    title: "I<3Hack",
                    description: "I <3 HACK, is the ideal application to find that better half you are looking for to plant your garden of love. An application with the function of finding that person related to you, do not get carried away only by physical appearance but also you will complete a test to find the best possible compatibility with any user of the platform. They say that love is blind ... let's check it then. You also have the events tab available, where the places and the date will appear where you can spend a pleasant evening with a random person for a limited time, on a speed dating format. Your heart is a code, let them hack you.",
                    url: "https://i-love-hack.herokuapp.com/",
                    used: "HTML5, CSS3, JavaScript, React, NodeJS, Express, MongoDB, Axios, GitHub"
                },
                {
                    title: "Gluten free Web",
                    description: "Have you ever wondered anything about coeliac desease? Did you ever feel alone on this? Do you or some one importante for you just become diagnosed? On this web you will be able to find my life experience and some glutenfree recipes to start your journey with me, you are not alone on this!",
                    url: "https://martacamacho.github.io/M1-GlutenFreeWeb/",
                    used: "HTML5, CSS3, JavaScript, GitHub"
                }
            ]
        }
      }

        getAllProjects = async () => {
            try {
                const res = await service.allProjects();
                this.setState({ listOfProjects: res });
            } catch (error) {
            }};
        
            componentDidMount() {
                this.getAllProjects();
              }
              whatToMap = () =>  this.state.listOfProjects.length > 0 ? this.state.listOfProjects : this.state.projectsBackUp;

    render() {
        return (
            <div>
                <section className="my-work" data-aos="fade-left" data-aos-duration="2000" id="work">
                    <h2 className="section-title section-title-work">My projects</h2>
                    <p className="section-subtitle section-subtitle-work">Check out my work!</p>
                    <div className="portfolio" >
                    { this.whatToMap().map((project, index) => {
                    return (
                        <div className="portfolio-item" key={index}>
                            <a className="portfolio-item-title" href={project.url} target="_blank" rel="noreferrer">
                            <p >{project.title}</p>
                            </a>
                            <div className="portfolio-item-body">
                            <p>Description: {project.description}</p>
                            <p>For this project was used: {project.used}</p>
                            </div>
                        </div>
                    )}) } 
                    </div> 
                </section>
            </div>
        )
    }
}
