import React, {Component} from 'react';

import styles from "../../../styles/Presentors/PagePresentors/GenreCardComponent.module.css";
import {observer} from "mobx-react";

@observer
class GenreCardComponent extends Component {

    listActivator=()=>{
        this.props.PPD.data.homePage = false;
        this.props.PPD.data.musicListPage = false;
        this.props.PPD.data.searchPage = false;
        this.props.PPD.data.uploadPage = false;
        this.props.PPD.data.browsePage = false;
        this.props.PPD.data.activeGenreCard = true;

        this.props.AGC.pageGenreName = this.props.genreName;
    }


    render() {
        return (
            <div className={styles.genreCard} onClick={this.listActivator}>
                <div></div>
                <h5>{this.props.genreName}</h5>
            </div>
        );
    }
}

export default GenreCardComponent;