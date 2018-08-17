import React from 'preact';

import './styles.scss';
import projects from './projects.json';

import { Link } from 'preact-router/match';

import Photo from 'components/Photo';


class Projects extends React.Component {

    getProjects = () => {
        console.log(this.props);
        return projects.map((project, i) => (
            <Link key={i} href={"/project/" + project.title}>
                <Photo 
                    title={project.title} 
                    description={project.description} 
                    url={project.url}
                />
            </Link>
        ))
    }

    render() {
        return (
            <div className="projects">
                {this.getProjects()}
            </div>
        )
    }
}

export default Projects;