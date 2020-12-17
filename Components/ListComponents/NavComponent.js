import React, {Component} from 'react';
import Image from 'next/image';
import {observer} from "mobx-react";

import styles from "../../styles/Presentors/ListPresentor/ListComponents/NavComponent.module.css"

@observer
class NavComponent extends Component {

    HomeLike=()=>{
        this.props.PPD.data.homePage = true;
        this.props.PPD.data.musicListPage = false;
        this.props.PPD.data.searchPage = false;
        this.props.PPD.data.uploadPage = false;
        this.props.PPD.data.browsePage = false;
        this.props.PPD.data.activeGenreCard = false;
    }

    MusicListLink=()=>{
        this.props.PPD.data.homePage = false;
        this.props.PPD.data.musicListPage = true;
        this.props.PPD.data.searchPage = false;
        this.props.PPD.data.uploadPage = false;
        this.props.PPD.data.browsePage = false;
        this.props.PPD.data.activeGenreCard = false;
    }

    SearchLink=()=>{
        this.props.PPD.data.homePage = false;
        this.props.PPD.data.musicListPage = false;
        this.props.PPD.data.searchPage = true;
        this.props.PPD.data.uploadPage = false;
        this.props.PPD.data.browsePage = false;
        this.props.PPD.data.activeGenreCard = false;
    }

    UploadLink=()=>{
        this.props.PPD.data.homePage = false;
        this.props.PPD.data.musicListPage = false;
        this.props.PPD.data.searchPage = false;
        this.props.PPD.data.uploadPage = true;
        this.props.PPD.data.browsePage = false;
        this.props.PPD.data.activeGenreCard = false;
    }

    browseLink=()=>{
        this.props.PPD.data.homePage = false;
        this.props.PPD.data.musicListPage = false;
        this.props.PPD.data.searchPage = false;
        this.props.PPD.data.uploadPage = false;
        this.props.PPD.data.browsePage = true;
        this.props.PPD.data.activeGenreCard = false;
    }

    render() {
        return (
            <>
                <ul className={styles.ulnav}>
                    <li onClick={this.HomeLike}>
                        <img src="/list/home.png" />
                        <span>Home</span>
                    </li>
                    <li onClick={this.MusicListLink}>
                        <img src="/list/list.png" />
                        <span>Music List</span>
                    </li>
                    <li onClick={this.UploadLink}>
                        <img src="/list/upload.png"/>
                        <span>Upload</span>
                    </li>
                    <li onClick={this.SearchLink}>
                        <img src="/list/search.png"/>
                        <span>Search</span>
                    </li>
                    <li onClick={this.browseLink}>
                        <img src="/list/browse.png"/>
                        <span>Browse</span>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavComponent;