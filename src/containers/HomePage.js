import React, { Component }             from 'react';
import { BrowserRouter }                from "react-router-dom";
import SlideBanner                      from '../components/Slider/SliderBanner';
import SaleBanner                       from '../components/Banner/SaleBanner';
import ProductItem                      from '../components/GridItem/ProductItem';
import ProductService                   from '../components/ProductService/ProductService';
import Illustrationv5                   from '../components/Illustrationv5/Illustrationv5';
import Nav                              from "reactstrap/es/Nav";
import NavLink                          from "reactstrap/es/NavLink";


import '../ui/item/backgroundImage.css';



export default class HomePage extends Component {
    render() {

        const banners = [
            { img: "assets/img/blog/banner1.png" },
            { img: "assets/img/blog/banner2.png" },
        ];

        const products = [
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/40.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/41.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/42.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/43.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/44.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/45.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/46.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/47.jpg" },
            { name: "name1", gender: "man", category: "cate1", price: "300$", img: "assets/img/blog/48.jpg" },
        ];

        return (
            <BrowserRouter>
                <Nav>
                    <div>
                        <div className="wrapper">
                            <SlideBanner/>
                            <div className="container content-md">
                                <div className="row">
                                    {
                                        banners.map((banner, index) => {
                                            return(
                                                <div key={index}>
                                                    <SaleBanner banner={banner}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className="backgroundImage1">

                                </div>

                                <div className="heading heading-v1 margin-bottom-20">
                                    <h2>Featured products</h2>
                                </div>

                                <div className="illustration-v2 margin-bottom-60">
                                    <div className="customNavigation margin-bottom-25">
                                        <NavLink className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></NavLink>
                                        <NavLink className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></NavLink>
                                    </div>
                                    <ul className="list-inline owl-slider">
                                        {
                                            products.map((product, index) => {
                                                return(
                                                    <div key={index}>
                                                        <ProductItem product={product}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>



                                <div className="backgroundImage2">

                                </div>




                                <div className="heading heading-v1 margin-bottom-40">
                                    <h2>Latest products</h2>
                                </div>

                                <div className="illustration-v2 margin-bottom-60">
                                    <div className="customNavigation margin-bottom-25">
                                        <NavLink className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></NavLink>
                                        <NavLink className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></NavLink>
                                    </div>
                                    <ul className="list-inline owl-slider">
                                        {
                                            products.map((product, index) => {
                                                return(
                                                    <div key={index}>
                                                        <ProductItem product={product}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>



                            </div>
                            <div className="container">
                                <ProductService/>
                                <Illustrationv5/>
                            </div>
                        </div>
                    </div>
                </Nav>
            </BrowserRouter>
        );
    }
}
