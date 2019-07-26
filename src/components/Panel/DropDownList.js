import React, { Component } from 'react';
import BrandsDropDown      from "./BrandsDropDown";
import CategoriesDropDown  from "./CategoriesDropDown";
import SizeDropDown        from "./SizeDropDown";
import PriceDropDown       from "./PriceDropDown";
import ColorDropDown       from "./ColorDropDown";
import RatingDropDown      from "./RatingDropDown";


export default class DropDownList extends Component {
    render() {
        return (
            <div>
                <BrandsDropDown title="Brands"/>
                <CategoriesDropDown title="Categories"/>
                <SizeDropDown title="Size"/>
                <PriceDropDown title="Price"/>
                <ColorDropDown title="Color"/>
                <RatingDropDown title="Rating"/>
            </div>
        );
    }
}
