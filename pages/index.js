//Tools
import React, {Component} from 'react';
import {observer} from "mobx-react";

//Components
import ListPresentor from "../Presentors/ListPresentor";
import PagePresentor from "../Presentors/PagePresentor";
import MediaPlayerPresentor from "../Presentors/MediaPlayerPresentor";

//Models
import musicList from "../Moldes/MusicList";
import pagePresentor from "../Moldes/PagePresentor";
import activeSong from "../Moldes/ActiveSong";

//Stylesheet
import styles from "../styles/Home.module.css";
import ActiveGenreCard from "../Moldes/ActiveGenreCard";
import PlayerValues from "../Moldes/PlayerValues";

@observer
class Index extends Component {

    //AKA MLA
    MusicListData = new musicList();
    //AKA PPI
    PagePresentorData = new pagePresentor();
    //AKA ASD
    ActiveSongData = new activeSong();
    //AKA AGC
    ActiveGenreCard = new ActiveGenreCard();
    //AKA SSD
    PlayerValuesData = new PlayerValues();


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.LandP}>
                    <ListPresentor MLD={this.MusicListData} PPD={this.PagePresentorData} ASD={this.ActiveSongData} AGC={this.ActiveGenreCard} PVD={this.PlayerValuesData}/>
                    <PagePresentor MLD={this.MusicListData} PPD={this.PagePresentorData} ASD={this.ActiveSongData} AGC={this.ActiveGenreCard} PVD={this.PlayerValuesData}/>
                </div>
                <MediaPlayerPresentor MLD={this.MusicListData} PPD={this.PagePresentorData} ASD={this.ActiveSongData} AGC={this.ActiveGenreCard} PVD={this.PlayerValuesData}/>
            </div>
        );
    }
}

export default Index;