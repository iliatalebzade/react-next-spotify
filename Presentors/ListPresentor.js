import React, {Component} from 'react';

import styles from '../styles/Presentors/ListPresentor/ListPresentor.css';
import NavComponent from "../Components/ListComponents/NavComponent";
import {observer} from "mobx-react";

@observer
class ListPresentor extends Component {

    menuToggle=()=>{
        let menu = document.getElementById("burgerMenue")
        if(menu.className === styles.listdiv){
            menu.className=styles.activeToggle
        }else{
            menu.className=styles.listdiv
        }
    }

    render() {
        return (
            <>
                <div className={styles.burgerIcon} onClick={this.menuToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.listdiv} id="burgerMenue">
                    <div className={styles.innerDiv}>
                        <img src={this.props.ASD.data.coverSrc} className={styles.image}/>
                        <NavComponent PPD={this.props.PPD} />
                    </div>
                </div>
            </>
        );
    }
}

export default ListPresentor;