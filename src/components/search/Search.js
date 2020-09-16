import React from 'react';
import './Search.css';
import {connect} from "react-redux";

const Search = ({results}) => {
console.log(results)
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    return (
        <section className={"search"}>

            {
               results ? results.map(item =>
                    <div key={item.id} className="Item" >
                        <img src={imageUrl + item.poster_path} alt="bg"/>
                    </div>
                )
                   : <h1>NOT FOUND</h1>
            }





        </section>
    );
};


const mapStateToProps = (state) => ({
        results: state.searchResult.results
});

export default connect(mapStateToProps, {})(Search);
