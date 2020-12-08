import React, { Component } from 'react';
import service from "../lib/service";

export default class Projects extends Component {

    constructor(){
        super();
        this.state = { listOfProjects: [] }
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


    render() {
        return (
            <div>
                <section className="my-work" id="work">
                    <h2 className="section-title section-title-work">My projects</h2>
                    <p className="section-subtitle section-subtitle-work">Check out my work!</p>
                    <div className="portfolio" >
                    { this.state.listOfProjects ? this.state.listOfProjects.map((project, index) => {
                    return (
                        <div className="portfolio-item" key={index}>
                            <div className="portfolio-item-title">
                            <a href={project.url} >
                            <p>{project.title}</p>
                            </a>
                            </div>
                            <div className="portfolio-item-body">
                            <p>Description: {project.description}</p>
                            <p>For this project was used: {project.used}</p>
                            </div>
                        </div>
                    )}) : <p>There are no projects yet!</p>} 
                    </div> 
                </section>
            </div>
        )
    }
}
