import {observable} from "mobx";

class pagePresentor{

    //list of all pages and they're selected
    @observable data = {
        homePage: true,
        musicListPage: false,
        searchPage: false,
        uploadPage: false,
        browsePage: false,
        activeGenreCard: false,
        pageGenreName: "",
    }
}

export default pagePresentor;