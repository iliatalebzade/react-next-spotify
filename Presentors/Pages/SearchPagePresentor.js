import React, {Component} from 'react';

import styles from '../../styles/Presentors/PagePresentors/SearchPagePresentor.module.css';
import Card from "../../Components/Card";
import {observer} from "mobx-react";


@observer
class SearchPresentor extends Component {
    changeHandler=(event)=>{

        const search = event.target.value.toLowerCase();

        this.props.MLD.data.map((item, index)=>{
            if(item.name.includes(search) && search!="" || item.artist.includes(search) && search!=""){
                item.rightSearch = true;
            }else{
                item.rightSearch = false;
            }
        })
    }

    render() {

        let resultsNumber = 0;

        return (
            <div className={styles.searchmain}>
                <h1>Search Music</h1>
                <br/>
                <br/>
                <input type="text" placeholder="Search Song or Artist name" onChange={this.changeHandler} />
                <br/>
                <br/>
                <div className={styles.results}>
                    {this.props.MLD.data.map((item, index)=>{
                        if(item.rightSearch === true){
                            return <Card item={item} index={index} MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC} />
                        }
                    })
                    }
                </div>
            </div>
        );
    }
}

export default SearchPresentor;