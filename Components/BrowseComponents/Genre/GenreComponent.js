import React, {Component} from 'react';
import GenreCardComponent from "./GenreCardComponent";

import styles from "../../../styles/Presentors/PagePresentors/GenreComponent.module.css";
import {observer} from "mobx-react";

@observer
class GenreComponent extends Component {
    render() {
        return (
            <div>
                <h5>Genre</h5>
                <div className={styles.row}>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Metal"/>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Rap"/>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Pop"/>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Classic"/>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Lofi"/>
                    <GenreCardComponent PPD={this.props.PPD} MLA={this.props.MusicListData} AGC={this.props.AGC} genreName="Rock"/>
                </div>
            </div>
        );
    }
}

export default GenreComponent;