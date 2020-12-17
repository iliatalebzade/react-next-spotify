import React, {Component} from 'react';

import styles from '../../styles/Presentors/BrowsePresentor/GenreCardPage.module.css'
import {observer} from "mobx-react";
import Card from "../../Components/Card";
import MusicListPagePresentor from "./MusicListPagePresentor";

@observer
class GenreCardPage extends Component {
    render() {
        return (
            <div className={styles.GenreCardPage}>
                <h5>{this.props.AGC.pageGenreName}</h5>
                <div className={styles.cardbox}>
                    {this.props.MLD.data.map((item, index)=>{
                        if(this.props.AGC.pageGenreName.toLowerCase() === item.genre){
                            return <Card item={item} index={index} MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                        }
                    })

                    }
                </div>
            </div>
        );
    }
}

export default GenreCardPage;