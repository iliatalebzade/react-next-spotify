import React, {Component} from 'react';

import styles from "../../styles/Presentors/PagePresentors/ListRow.module.css";
import {observer} from "mobx-react";

@observer
class ListRow extends Component {

    activator=()=>{
        this.props.MLD.data.map((item,index)=>{
            if(this.props.index === index){
                this.props.ASD.data={
                    name: item.name,
                    artist: item.artist,
                    coverSrc: item.coverSrc,
                    src: item.src,
                    index: item.index,
                    IS_ACTIVE: true
                }
            }
        })
    }

    render() {
        return (
            <div className={styles.ListRow} onClick={this.activator}>
                <ul>
                    <li><span>{this.props.item.name}</span><span>{this.props.item.artist}</span><span>time</span></li>
                </ul>
            </div>
        );
    }
}

export default ListRow;