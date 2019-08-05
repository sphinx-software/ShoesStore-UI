import React, { Component } from 'react';

export default class Slider extends Component {
    render() {
        return (
            <div>
                <div className="tp-banner-container">
                    <div className="tp-banner">
                        <ul>
                            {/* SLIDE */}
                            <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 1">
                                {/* MAIN IMAGE */}
                                <img src="assets/img/6.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" /> 
                                {/* LAYER */}
                            </li>
                            {/* END SLIDE */}
                            {/* SLIDE */}
                            <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 2">
                                {/* MAIN IMAGE */}
                                <img src="assets/img/7.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />
                                {/* LAYER */}
                            </li>
                            {/* END SLIDE */}
                            {/* SLIDE */}
                            <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 3">
                                {/* MAIN IMAGE */}
                                <img src="assets/img/8.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="right top" data-bgrepeat="no-repeat" />
                                {/* LAYER */}
                            </li>
                            {/* END SLIDE */}
                            {/* SLIDE */}
                            <li className="revolution-mch-1" data-transition="fade" data-slotamount={5} data-masterspeed={1000} data-title="Slide 4">
                                {/* MAIN IMAGE */}
                                <img src="assets/img/9.jpg" alt="darkblurbg" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" />  
                                {/* LAYER */}
                            </li>
                            {/* END SLIDE */}
                        </ul>
                        <div className="tp-bannertimer tp-bottom" />
                    </div>
                </div>
            </div>
        );
    }
}
