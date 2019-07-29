import React, { Component } from 'react';
import BrandsAccordion      from "./BrandsAccordion";
import CategoriesAccordion  from "./CategoriesAccordion";
import SizeAccordion        from "./SizeAccordion";
import PriceAccordion       from "./PriceAccordion";
import ColorAccordion       from "./ColorAccordion";
import RatingAccordion      from "./RatingAccordion";


export default class AccordionList extends Component {
    render() {
        return (
            <div>
                <BrandsAccordion title="Brands"/>
                <CategoriesAccordion title="Categories"/>
                <SizeAccordion title="Size"/>
                <PriceAccordion title="Price"/>
                <ColorAccordion title="Color"/>
                <RatingAccordion title="Rating"/>
            </div>
        );
    }
}
