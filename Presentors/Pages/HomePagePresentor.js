import React, {Component} from 'react';
import Card from "../../Components/Card";

import styles from '../../styles/Presentors/PagePresentors/HomePagePresentor.module.css';


class HomePresentor extends Component {
    render() {
        return (
            <div className={styles.home}>
                <h1>Home</h1>
                <br/>
                <br/>
                <h5>Songs</h5>
                <div className={styles.cardbox}>
                    {this.props.MLD.data.map((item, index)=>(
                        <Card item={item} index={index} MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                    ))
                    }
                </div>
            </div>
        );
    }
}

export default HomePresentor;