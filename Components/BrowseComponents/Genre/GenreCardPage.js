import React, {Component} from 'react';

import styles from "../../../styles/Presentors/PagePresentors/GenreCardPage.module.css";
import {observer} from "mobx-react";
import Card from "../../Home cards/Card";

@observer
class GenreCardPage extends Component {
    render() {
        return (
            <div className={styles.GenreCardPage}>
                {/*<h5>{this.props.model.activeGenreCard.pageGenreName}</h5>*/}
                <div className={styles.cardbox}>
                    {/*{this.props..map((item, index)=>{*/}
                    {/*    if(this.props.model.activeGenreCard.pageGenreName.toLowerCase() === item.genre){*/}
                    {/*        return <Card item={item} index={index} model={this.props.model}/>*/}
                    {/*    }*/}
                    {/*})*/}

                    {/*}*/}
                </div>
            </div>
        );
    }
}

export default GenreCardPage;