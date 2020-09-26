import React, {useEffect} from 'react';
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
import Test from "./components/test";
import {connect} from "react-redux";
import {getConfigData} from "./redux/reducers/configDataReducer";


function App(props) {
    useEffect(() =>{
    props.getConfigData();
    },[])

    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route  path={"/home"} render={ ()=> <Home /> }/>
                    <Route  path={"/movies"} render={ ()=> <Movies /> }/>
                    <Route  path={"/search"} render={ ()=> <Search /> }/>
                    <Route exact path={"/test"} render={ ()=> <Test /> }/>
                </Switch>
                {/*<Footer />*/}


            </div>
        </Router>

    );
}

export default connect(null,{getConfigData})(App);
