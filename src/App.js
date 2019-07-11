import React, { Component }         from 'react';
import                                   './App.css';
import { BrowserRouter as  Router } from "react-router-dom";
import RouterProtect                from "./RouterProtect";
import Topbar from "./components/Auth/Topbar";
import Header from "./components/Header/Header";




export default class App extends Component {
 render() {
   return (
       <Router>
           <Topbar/>
           <Header/>

           <RouterProtect/>

       </Router>
   );
 }
}
