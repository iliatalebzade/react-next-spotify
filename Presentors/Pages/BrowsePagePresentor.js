import React, {Component} from 'react';
import GenreComponent from "../../Components/BrowseComponents/Genre/GenreComponent";

import styles from '../../styles/Presentors/PagePresentors/BrowsePagePresentor.module.css';
import {observer} from "mobx-react";

@observer
class BroesePresentor extends Component {
    render() {
        return (
            <div className={styles.browse}>
                <h1>Browse</h1>
                <div className={styles.cardbox}>
                    <GenreComponent PPD={this.props.PPD} MLD={this.props.MLD} AGC={this.props.AGC} />
                </div>
            </div>
        );
    }
}

export default BroesePresentor;