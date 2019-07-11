import React, { Component }            from 'react';
import { BrowserRouter, Router, Link } from "react-router-dom";
import Slider                          from '../components/Slider/Slider';
import Illustrationv1                  from '../components/Illustrationv1/Illustrationv1';
import Illustrationv2                  from '../components/Illustrationv2/Illustrationv2';
import Illustrationv3                  from '../components/Illustrationv3/Illustrationv3';
import Illustrationv4                  from '../components/Illustrationv4/Illustrationv4';
import TwitterBlock                    from '../components/TwitterBlock/TwitterBlock';
import ProductService                  from '../components/ProductService/ProductService';
import Illustrationv5                  from '../components/Illustrationv5/Illustrationv5';
import CollectionBanner                from '../components/CollectionBanner/CollectionBanner';
import Sponsors                        from '../components/Sponsors/Sponsors';


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="wrapper">
                            {/* Topbar */}
                            {/* Navbar */}
                        <Slider/>
                        <div className="container content-md">
                            {/* Illustrationv1 */} <Illustrationv1/> {/* End Illustrationv1 */}
                            <div className="heading heading-v1 margin-bottom-20">
                                <h2>Featured products</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio elit, ultrices vel cursus sed, placerat ut leo. Phasellus in magna erat. Etiam gravida convallis augue non tincidunt. Nunc lobortis dapibus neque quis lacinia. Nam dapibus tellus sit amet odio venenatis</p>
                            </div>
                            {/* Illustrationv2 */} <Illustrationv2/> {/* End Illustrationv2 */}
                            {/* Illustrationv3 */} <Illustrationv3/> {/* End Illustrationv3 */}
                            <div className="heading heading-v1 margin-bottom-40">
                                <h2>Latest products</h2>
                            </div>
                            {/* Illustrationv4 */} <Illustrationv4/> {/* End Illustrationv4 */}
                        </div>
                        <TwitterBlock/>
                        <div className="container">
                            <ProductService/>
                            <Illustrationv5/>
                        </div>
                        <CollectionBanner/>
                        <Sponsors/>
                        {/* Footer */}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
