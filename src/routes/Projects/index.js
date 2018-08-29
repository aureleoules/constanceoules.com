import React from 'preact';

import './styles.scss';
import projects from 'projects.json';

import { Link } from 'preact-router/match';

import Photo from 'components/Photo';

import strings from 'strings';
import { getLanguage } from '../../utils';

class Projects extends React.Component {

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_PROJECTS;
    }

    getProjects = () => {
        return projects.map((project, i) => {
            const image = require('../../assets/photos/' + project.title + '/' + project.showcase);
            return (
                <Link className="project-link" key={i} href={"/project/" + project.title}>
                    <Photo 
                        fade
                        title={project.title} 
                        subtitle={project.subtitle} 
                        src={image}
                    />
                </Link>
            )
        });
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