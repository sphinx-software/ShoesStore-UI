import React,           { Component }               from 'react';
import                                                   './App.css';
import                  { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import Topbar                                       from "./components/Topbar/Topbar";
=======
import Topbar                                       from "./layouts/Topbar/Topbar";
>>>>>>> develop
import Header                                       from "./layouts/Header/Header";
import Footer                                       from './layouts/Footer/Footer';
import RouterProtect                                from './routes';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Topbar/>
                <Header/>
                <RouterProtect/>
                <Footer/>
            </Router>
        );
    }
}