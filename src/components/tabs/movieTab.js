import React from 'react';

const MovieTab = ({onClick}) => {

    const tabTitles = [
        {title:"Popular", attr: "popular"},
        {title:"Upcoming", attr: "upcoming"},
        {title:"Top Rated", attr: "top_rated"},
        {title:"Now Playing", attr: "now_playing"}
    ]

    return (
        <div className={"movie__tab"}>
            {tabTitles.map((tab, i)=>
                <button
                    key={i}
                    onClick={(e)=>onClick(tab.attr)}
                    type="button"
                >{tab.title}</button>)}
        </div>
    );
};

export default MovieTab;
