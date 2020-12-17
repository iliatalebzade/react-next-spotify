import {observable} from "mobx";


class PlayerValues {
    @observable data={
        is_playing: false,
        progressVal: 0,
        nextSongLimit : true,
        prevSongLimit : true,
        mute: false,
        volumeVal: 5,
        prevVolumeVal: 5,
    }
}

export default PlayerValues;