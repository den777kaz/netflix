import React, {useState} from 'react';
import ReactPlayer from "react-player";


const Test = () => {
    const [play, setPlay] = useState(false);

    const onReady = () => {
        setPlay(true)
    }

    return (
    <>
        <div className="video-background">
            <div className="video-foreground">
                <iframe
                    src="https://www.youtube.com/embed/ysz5S6PUM-U?controls=0&showinfo=1&rel=0&autoplay=0&loop=1&play"
                    frameBorder="0" allowFullScreen/>
            </div>
        </div>
    </>


        // <div className={"video-box"}>
        //     <ReactPlayer
        //         className={"video"}
        //         url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        //         controls={false}
        //         playbackRate = {2}
        //         width = "100%"
        //         height = "800px"
        //         onReady={onReady}
        //         playing={play}
        //
        //     />
        // </div>
    );
};

export default Test;
