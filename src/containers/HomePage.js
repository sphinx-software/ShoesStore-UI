import React, { Component }             from 'react';
import { BrowserRouter }  from "react-router-dom";
import Slider                           from '../components/Slider/Slider';
import SaleBanner                       from '../components/Banner/SaleBanner';
import ProductItem                      from '../components/GridItem/ProductItem';
import CategoryItem                     from '../components/GridItem/CategoryItem';
import ProductService                   from '../components/ProductService/ProductService';
import Illustrationv5                   from '../components/Illustrationv5/Illustrationv5';

export default class HomePage extends Component {
    render() {

        const categories = [
            {
                name: 'Men1',
                amount: '200'
            },
            {
                name: 'Men2',
                amount: '200'
            },
            {
                name: 'Men3',
                amount: '200'
            }
        ]

        const products = [
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
            {
                name: "name4",
                gender: "man",
                category: "cate4",
                price: "300$"
            },
        ]

        return (
            <BrowserRouter>
                <div>
                    <div className="wrapper">
                        <Slider/>
                        <div className="container content-md">
                            <SaleBanner/>
                            <div className="heading heading-v1 margin-bottom-20">
                                <h2>Featured products</h2>
                            </div>

                            <div className="illustration-v2 margin-bottom-60">
                                <div className="customNavigation margin-bottom-25">
                                    <a className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></a>
                                    <a className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></a>
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

                            <div className="row margin-bottom-50">
                                {
                                    categories.map((category, index) => {
                                        return(
                                            <div key={index}>
                                                <CategoryItem category={category}/>
                                            </div>
                                            )
                                        }
                                    )
                                }
                            </div>

                            <div className="heading heading-v1 margin-bottom-40">
                                <h2>Latest products</h2>
                            </div>

                            <div className="illustration-v2 margin-bottom-60">
                                <div className="customNavigation margin-bottom-25">
                                    <a className="owl-btn prev rounded-x"><i className="fa fa-angle-left" /></a>
                                    <a className="owl-btn next rounded-x"><i className="fa fa-angle-right" /></a>
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
            </BrowserRouter>
        );
    }
}
