import React, {useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Movies from "./pages/movie/Movies";
import Search from "./pages/search/Search";
import Test from "./components/test";
import {connect} from "react-redux";
import {getConfigData} from "./redux/reducers/configDataReducer";
import Details from "./components/detailsModal/Details";

// https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details

function App(props) {
    useEffect(() =>{
    props.getConfigData();
    },[])
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path={"/"} render={ ()=> <Redirect to={"/home"} /> }/>
                    <Route  path={"/home"} render={ ()=> <Home /> }/>
                    <Route  path={"/movies"} render={ ()=> <Movies /> }/>
                    <Route  path={"/search"} render={ ()=> <Search /> }/>
                    <Route  path={"/details/:id?"} render={ ()=> <Details /> }/>
                    <Route exact path={"/test"} render={ ()=> <Test /> }/>
                </Switch>
                {/*<Footer />*/}


            </div>
        </Router>

    );
}

export default connect(null,{getConfigData})(App);
