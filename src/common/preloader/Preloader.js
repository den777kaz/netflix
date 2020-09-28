import React from 'react';
import './Preloader.css';
import loader from '../../assets/images/loader.svg';

const Preloader = () => {
    return (
        <div className={"preloader"}>
            <img src={loader} alt="loader"/>
        </div>
    );
};

export default Preloader;
