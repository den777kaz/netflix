import React from 'react';
import SlideRow from "./row/SlideRow";
import './ContentRows.css';
import ContentItem from "../../../common/ContentItem";

const ContentRows = (props) => {
    return (
        <section className="contentRows">
            <div className={"row__box"}>
                <h3>Popula on Netflix</h3>
                <div className="slideRow">
                    {props.content.map(item => <ContentItem key={item.id} image={item.backdrop_path} /> )}
                </div>
            </div>
            <div className={"row__box"}>
                <h3>Popula on Netflix</h3>
                <div className="slideRow">
                    {props.content.map(item => <ContentItem key={item.id} image={item.backdrop_path} /> )}
                </div>
            </div>

        </section>
    );
};

export default ContentRows;
