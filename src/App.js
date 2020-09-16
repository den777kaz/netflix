import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Movies from "./components/movies/Movies";
import Search from "./components/search/Search";
import ContentItem from "./common/ContentItem";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route  path={"/home"} render={ ()=> <Home /> }/>
                    <Route  path={"/movies"} render={ ()=> <Movies /> }/>
                    <Route  path={"/search"} render={ ()=> <Search /> }/>
                    {/*<Route exact path={"/test"} render={ ()=> <ContentItem /> }/>*/}
                </Switch>
                <Footer />


            </div>
        </Router>

    );
}

export default App;
