import React, { Component } from 'react';

import { Slide } from 'react-slideshow-image'


const slideImages = [
    "/assets/img/blog/41.jpg",
    "/assets/img/blog/40.jpg",
    "/assets/img/blog/40.jpg"
];

const properties = {
    duration: 5000,
    transitionDuration:500,
    infinite:true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}
                        className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}
                         className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}
                         className={'back-ground-img-slider'}
                    >
                    </div>
                </div>
            </Slide>
        </div>
    )
};
export default Slideshow;