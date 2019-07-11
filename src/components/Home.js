import React, {Component} from 'react';
import CollectionBanner from "./CollectionBanner/CollectionBanner";
import TwitterBlock from "./TwitterBlock/TwitterBlock";
import Footer from "./Footer/Footer";

class Home extends Component {
    render() {
        return(
            <switch>
                <CollectionBanner/>
                <TwitterBlock/>
                <Footer/>
            </switch>
        )
    }
}

export default Home;