//tools
import React, {Component} from 'react'
import {Slider} from "antd"
import {observer} from "mobx-react"

//stylesheet
import styles from '../styles/Presentors/MediaPlayerPresentor/MediaPlayerPresentor.css'

//components
import NamesComponent from "../Components/MediaPlayerComponents/NamesComponents"

@observer
class MediaPlayerPresentor extends Component {

    formatter=(value)=> {
        return `${value}`
    }

    muteSwitch=()=>{
        let audio = document.getElementById("audio")
        if(this.props.PVD.data.mute === false){
            this.props.PVD.data.volumeVal = 0
            this.props.PVD.data.mute = true
            audio.volume = this.props.PVD.data.volumeVal/10
        }else if(this.props.PVD.data.mute === true){
            this.props.PVD.data.volumeVal = this.props.PVD.data.prevVolumeVal
            this.props.PVD.data.mute = false
            audio.volume = this.props.PVD.data.volumeVal/10
        }
    }

    seeker=(value)=>{
        let audio = document.getElementById("audio")
        audio.currentTime = value/100*audio.duration
        this.seekBar()
    }

    seekBar=(value)=>{
        let audio = document.getElementById("audio")
        setInterval(()=>{
            this.props.PVD.data.progressVal = (audio.currentTime*100) / audio.duration;
            if(audio.currentTime === audio.duration){
                this.nextSong()
                this.playSong()
            }
        }, 1)
    }

    autoNext=()=>{
        this.nextSong()
        this.playSong()
    }

    volume=(value)=>{
        let audio = document.getElementById("audio")
        this.props.PVD.data.volumeVal = value
        this.props.PVD.data.prevVolumeVal = value
        audio.volume = this.props.PVD.data.volumeVal/10
    }

    pauseSong=()=>{
        let audio = document.getElementById("audio")
        this.props.PVD.data.is_playing = false
        if(this.props.PVD.data.is_playing === false){
            audio.pause()
        }
    }

    playSong=()=>{
        let audio = document.getElementById("audio")
        this.props.PVD.data.is_playing = true
        if(this.props.PVD.data.is_playing === true){
            audio.play()
            this.seekBar()
        }
        else if(this.props.ASD.data.name === "name"){
            this.props.ASD.data={
                name: this.props.MLD.data[0].name,
                artist: this.props.MLD.data[0].artist,
                coverSrc: this.props.MLD.data[0].coverSrc,
                src: this.props.MLD.data[0].src,
                index: this.props.MLD.data[0].index,
                IS_ACTIVE: true
            }
            audio.play()
            this.seekBar()
        }
    }

    nextSong=()=>{
        this.props.PVD.data.nextSongLimit = true
        this.props.MLD.data.map((item, index)=>{
            if(item.index === this.props.ASD.data.index+1 && this.props.PVD.data.nextSongLimit === true){
                this.props.ASD.data={
                    name: item.name,
                    artist: item.artist,
                    coverSrc: item.coverSrc,
                    src: item.src,
                    index: item.index,
                }
                this.props.PVD.data.nextSongLimit = false
                this.props.PVD.data.is_playing = false
            }
        })
    }

    prevSong=()=>{
        let audio = document.getElementById("audio")
        this.props.PVD.data.prevSongLimit = true
        this.props.MLD.data.map((item, index)=>{
            if(item.index === this.props.ASD.data.index-1 && this.props.PVD.data.prevSongLimit === true){
                if(Math.floor(audio.currentTime) < 15){
                    this.props.ASD.data={
                        name: item.name,
                        artist: item.artist,
                        coverSrc: item.coverSrc,
                        src: item.src,
                        index: item.index,
                    }
                    this.props.PVD.data.is_playing = false
                } else if(Math.floor(audio.currentTime) > 15){
                    audio.currentTime = 0
                }
                this.props.PVD.data.prevSongLimit = false
            }
        })
    }

    render() {
        return (
            <div className={styles.mpp}>
                <NamesComponent MLD={this.props.MLD} PPD={this.props.PPD} ASD={this.props.ASD} AGC={this.props.AGC}/>
                <div className={styles.mediamain}>

                    {/*-----controllers------------------------*/}
                    <div className={styles.box}>
                        <a onClick={this.prevSong}>
                            <img src="/mediaplayer/back.png"/>
                        </a>
                        {this.props.PVD.data.is_playing === false &&
                            <a onClick={this.playSong}>
                                <img src="/mediaplayer/play-button(1).png"/>
                            </a>
                        }
                        {this.props.PVD.data.is_playing === true &&
                            <a onClick={this.pauseSong}>
                                <img src="/mediaplayer/pause.png"/>
                            </a>
                        }
                        <a onClick={this.nextSong}>
                            <img src="/mediaplayer/forward.png"/>
                        </a>
                    </div>

                    {/*-----seekbar------------------------*/}
                    <div className={styles.sliderdiv}>
                        <Slider
                            tipFormatter={null}
                            min={0}
                            max={100}
                            onChange={this.seeker}
                            value={this.props.PVD.data.progressVal}
                        />
                    </div>
                </div>

                {/*-----volume setting------------------------*/}
                <div className={styles.lastmain}>
                    <div className={styles.main} onClick={this.muteSwitch}>
                        {this.props.PVD.data.volumeVal === 0 &&
                            <img src="/mediaplayer/mute.png"/>
                        }

                        {this.props.PVD.data.volumeVal <= 5 && this.props.PVD.data.volumeVal !== 0 &&
                            <img src="/mediaplayer/lowvolume.png"/>
                        }

                        {this.props.PVD.data.volumeVal >= 6 &&
                            <img src="/mediaplayer/highvolume.png"/>
                        }

                    </div>
                    <div className={styles.soundsliderdiv}>
                        <Slider tipFormatter={this.formatter} min={0} max={10} onChange={this.volume} value={this.props.PVD.data.volumeVal}/>
                    </div>
                </div>

                {/*-----audio file------------------------*/}
                <audio id="audio" src={this.props.ASD.data.src} onEnded={this.autoNext}/>
            </div>
        )
    }
}

export default MediaPlayerPresentor;