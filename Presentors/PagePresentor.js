import React, {Component} from 'react';
import {observer} from "mobx-react";

import styles from '../styles/Presentors/PagePresentor/PagePresentor.css'
import HomePagePresentor from "./Pages/HomePagePresentor";
import MusicListPagePresentor from "./Pages/MusicListPagePresentor";
import SearchPagePresentor from "./Pages/SearchPagePresentor";
import UploadPagePresentor from "./Pages/UploadPagePresentor";
import BrowsePagePresentor from "./Pages/BrowsePagePresentor";
import GenreCardPage from "./Pages/GenreCardPresentor";

@observer
class PagePresentor extends Component {
    render() {
        return (
            <div className={styles.pagepresentor}>
                {this.props.PPD.data.homePage &&
                    <HomePagePresentor MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }
                {this.props.PPD.data.musicListPage &&
                    <MusicListPagePresentor MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }
                {this.props.PPD.data.searchPage &&
                    <SearchPagePresentor MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }
                {this.props.PPD.data.uploadPage &&
                    <UploadPagePresentor MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }
                {this.props.PPD.data.browsePage &&
                    <BrowsePagePresentor MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }

                {this.props.PPD.data.activeGenreCard &&
                    <GenreCardPage MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                }
            </div>
        );
    }
}

export default PagePresentor;