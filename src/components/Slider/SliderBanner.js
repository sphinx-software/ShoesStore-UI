import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../../ui/sliderbanner/sliderbanner.css';

const fadeImages = [
    "/assets/img/6.jpg",
    "/assets/img/7.jpg",
    "/assets/img/8.jpg",
    "/assets/img/9.jpg",
];

const properties = {
    duration: 2500,
    transitionDuration:500,
    infinite:true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const SlideBanner = () => {
    return (
        <div className="sliderbanner">
            <Fade {...properties}>
                <div className="eachslide">
                    <div style={{'backgroundImage': `url(${fadeImages[0]})`}}
                        className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
                <div className="eachslide">
                    <div style={{'backgroundImage': `url(${fadeImages[1]})`}}
                         className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
                <div className="eachslide">
                    <div style={{'backgroundImage': `url(${fadeImages[2]})`}}
                         className={'back-ground-img-slider'}
                    >
                    </div>
                </div><div className="eachslide">
                    <div style={{'backgroundImage': `url(${fadeImages[3]})`}}
                         className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default SlideBanner;
