import React, {useEffect, useState} from 'react';
import './Header.css';
import logo from '../../assets/images/nitflex.svg'
import searchIcon from '../../assets/images/search-icon.svg';
import giftIcon from '../../assets/images/gift-icon.svg';
import notificationIcon from '../../assets/images/notification-icon.svg';
import downArrow from '../../assets/images/downArrow.svg';
import closeIcon from '../../assets/images/close-icon.svg';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {getSearch} from "../../redux/reducers/searchReducer";

const Header = (props) => {

    const image = "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"

// TODO add goBack router!!!

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [headerBg, setHeaderBg] = useState(false);


    useEffect(()=> {

        if(inputValue)  {
            props.getSearch(inputValue);
        }

    },[inputValue, props])

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
    }, [])

    const handleScroll = ()=> {
        if(window.pageYOffset > 30) {
            setHeaderBg(true)
        }else setHeaderBg(false)
    }

    const showInputField = (e) => {
        e.preventDefault();
        setShowInput(true)
    }

    const closeInputField = (e) => {

        e.preventDefault();
       // props.history.goBack()

        props.history.push("/home");
        setShowInput(false)
        setInputValue("");
    }


    const hideInputField = () => {
        if (!inputValue) {
            setShowInput(false);
            setInputValue("");
            // props.history.push("/home");
            props.history.goBack()

        }
    }

    const onChangeInput = (e) => {
        // e.preventDefault();
        setInputValue(e.currentTarget.value)
        if(inputValue) {
            props.history.push("/search");
        }else props.history.push("/home");


    }

    return (
        <header className={`header ${headerBg ? "active" : ""}`}>
            <div className="header__left">
                <div className="header__logo">
                    <img src={logo}
                         alt="netflix logo"/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/home" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shows" activeClassName="active">TV Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies" activeClassName="active">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink to="/latest" activeClassName="active">Latest</NavLink>
                        </li>
                        <li>
                            <NavLink to="/list" activeClassName="active">MyList</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header__right">
                <div className="header__search">
                    <div className={`search__field ${showInput ? "active" : ""}`}>
                        <button
                            onClick={showInputField}
                        >
                            <img src={searchIcon} alt="search icon"/>
                        </button>
                        {
                            showInput ? <input
                                    placeholder={"Title, people, genres"}
                                    className={"search__input"}
                                    autoFocus
                                    onBlur={hideInputField}
                                    onChange={onChangeInput}
                                    type="text"
                                    value={inputValue}/>
                                : null
                        }
                        {
                            inputValue && showInput && <button
                                onClick={closeInputField}
                            >
                                <img src={closeIcon} alt="close icon"/>
                            </button>
                        }
                    </div>

                </div>
                <div className="header__gift">
                    <img src={giftIcon} alt="Gift icon"/>
                </div>
                <div className="header__notification">
                    <img src={notificationIcon} alt="notification"/>
                </div>
                <div className="header__accountOption">
                    <div className="avatar">
                        <img src={image} alt="user Avatar"/>
                    </div>
                    {/*<img src={upArrow} alt="up"/>*/}
                    <img src={downArrow} alt="down"/>

                </div>
            </div>
        </header>
    );
};

export default compose(
    withRouter,
    connect(null, {getSearch})
)(Header);
