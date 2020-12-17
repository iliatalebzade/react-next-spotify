import React, {Component} from 'react';

import styles from "../../styles/Presentors/MediaPlayerPresentor/NamesComponent.module.css";
import {observer} from "mobx-react";

@observer
class NamesComponent extends Component {
    render() {
        return (
            <div className={styles.names}>
                <a className={styles.musicname}>{this.props.ASD.data.name}</a>
                <a className={styles.artist}>{this.props.ASD.data.artist}</a>
            </div>
        );
    }
}

export default NamesComponent;