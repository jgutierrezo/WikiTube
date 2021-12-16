import React from "react";
import WikipSearchList from "./functionalities/Wikipedia/components/WikipSearchList";
import YouTubeAPI from "./functionalities/YT/YouTubeAPI";
import Route from "./Navigation/Route.js";
import Header from "./Navigation/Header/Header.js";
import "./App.css"

class App extends React.Component {


    render() {
        return (<div className="appClass">
            <Header/>
            <Route path="/">
                <WikipSearchList />
            </Route>

            <Route path="/YT">
                <YouTubeAPI />
            </Route>


        </div>);
    }


}

export default App;