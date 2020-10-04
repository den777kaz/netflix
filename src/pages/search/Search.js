import React, {useEffect} from 'react';
import './Search.css';
import {connect} from "react-redux";


const Search = ({results, isLoading, imageConfig }) => {

    const imageUrl = "https://image.tmdb.org/t/p/w185";


    useEffect(() => {
    }, [])


    const handleClick = (id) => {


    }

    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className={"search"}>

            {
                results ? results.filter(item => item.poster_path).map(item =>
                        <div key={item.id}
                             className="search__item"
                             id={item.id}
                             onClick={e => handleClick(item.id)}>
                            <img src={imageUrl + item.poster_path} alt="bg"/>
                        </div>
                    )
                    : <h1>NOT FOUND</h1>
            }


        </section>
    );
};


const mapStateToProps = (state) => ({
    results: state.searchResult.results,
    isLoading: state.searchResult.isLoading,
    imageConfig: state.configData.images
});

export default connect(mapStateToProps, {})(Search);
