import React from 'preact';

import './styles.scss';

import strings from 'strings';

import Photo from 'components/Photo';
import { getLanguage } from '../../utils';

import client from 'services/client';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image_url: "",
            content_en: "",
            content_fr: ""
        }
    }

    componentDidMount() {
        document.title = "Constance Oulès - " + strings[getLanguage()].SIDEMENU_ABOUT;
        client.get('/content/about').then(response => {
            console.log(response.data);
            const content = response.data.payload;
            this.setState({...content});
        }).catch(err => {
            if(err) throw err;
        });
    }

    render() {
        return (
            <div className="about">
                <Photo src={this.state.image_url} alt="about"/>
                <p>{this.state["content_" + getLanguage()]}</p>
            </div>
        )
    }
}

export default About;