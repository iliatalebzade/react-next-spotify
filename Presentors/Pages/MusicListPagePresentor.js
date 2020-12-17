import React, {Component} from 'react';
import ListRow from "../../Components/MusicListComponents/ListRow";

import styles from '../../styles/Presentors/PagePresentors/MusicListPagePresentor.module.css';
import HomePagePresentor from "./HomePagePresentor";

class MusicListPresentor extends Component {
    render() {
        return (
            <div className={styles.MusicList}>
                <h1>Music List</h1>
                <br/>
                <br/>
                <div>
                    <ul className={styles.liheader}>
                        <li>
                            <span>Name</span>
                            <span>Artist</span>
                            <span>Time</span>
                        </li>
                    </ul>
                    {this.props.MLD.data.map((item, index)=>(
                        <ListRow item={item} index={index} MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                    ))
                    }
                </div>
            </div>
        );
    }
}

export default MusicListPresentor;