import {observable} from "mobx";

class musicList {

    //list of all the musics and
    @observable data = [
        {
            name: "numb",
            artist: "linking park",
            src: "/songs/Numb.mp3",
            coverSrc: "/songs/songcovers/numb.jpg",
            rightSearch: false,
            genre: "metal",
            index: 0,
        },
        {
            name: "crawling",
            artist: "linking park",
            src: "/songs/Crawling.mp3",
            coverSrc: "/songs/songcovers/crawling.jpg",
            rightSearch: false,
            genre: "metal",
            index: 1,
        },
        {
            name: "in the end",
            artist: "linking park",
            src: "/songs/InTheEnd.mp3",
            coverSrc: "/songs/songcovers/intheend.jpg",
            rightSearch: false,
            genre: "metal",
            index: 2,
        },
        {
            name: "breaking the habit",
            artist: "linking park",
            src: "/songs/BreakingTheHabit.mp3",
            coverSrc: "/songs/songcovers/breakingthehabit.jpg",
            rightSearch: false,
            genre: "metal",
            index: 3,
        },
        {
            name: "lose yourself",
            artist: "eminem",
            src: "/songs/LoseYourself.mp3",
            coverSrc: "/songs/songcovers/loseyourself.jpeg",
            rightSearch: false,
            genre: "rap",
            index: 4,
        },
        {
            name: "the way i am",
            artist: "eminem",
            src: "/songs/TheWayIAm.mp3",
            coverSrc: "/songs/songcovers/TheWayIAm.jpg",
            rightSearch: false,
            genre: "rap",
            index: 5,
        },
        {
            name: "lovely",
            artist: "billie eilish",
            src: "/songs/lovely.mp3",
            coverSrc: "/songs/songcovers/lovely.jpg",
            rightSearch: false,
            genre: "pop",
            index: 6,
        },
        {
            name: "bad guy",
            artist: "billie eilish",
            src: "/songs/badguy.mp3",
            coverSrc: "/songs/songcovers/badguy.png",
            rightSearch: false,
            genre: "pop",
            index: 7,
        },

    ]
}

export default musicList;