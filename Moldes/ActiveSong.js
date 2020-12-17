import {observable} from "mobx";


class activeSong{

    //list of all the data of the selected active song
    @observable data={
        name: "name",
        artist: "artist",
        coverSrc: "/mediaplayer/musiccover.png",
        src: "",
        index: 0,
        IS_ACTIVE: false
    };
}

export default activeSong;