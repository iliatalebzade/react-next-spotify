import React, {Component} from 'react'

import styles from '../styles/Global/Card.css'

import {observer} from "mobx-react"


@observer
class Card extends Component {

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
            <div className={styles.card} onClick={this.activator}>
                <img className={styles.img} src={this.props.item.coverSrc} />
                <p>{this.props.item.name}</p>
            </div>
        );
    }
}

export default Card;