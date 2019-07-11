import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-v4">
                <div className="shop-subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 md-margin-bottom-20">
                                <h2>subscribe to our weekly <strong>newsletter</strong></h2>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Email your email..." />
                                    <span className="input-group-btn">
                                        <button className="btn" type="button"><i className="fa fa-envelope-o" /></button>
                                   </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            {/* About */}
                            <div className="col-md-4 md-margin-bottom-40">
                                <a href="index.html"><img className="footer-logo" src="assets/img/logo-2.png" alt /></a>
                                <p>About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales.</p>
                                <br />
                                <ul className="list-unstyled address-list margin-bottom-20">
                                    <li><i className="fa fa-angle-right" />California, US, Lorem Lis Street, Orange, 25</li>
                                    <li><i className="fa fa-angle-right" />Phone: 800 123 3456</li>
                                    <li><i className="fa fa-angle-right" />Fax: 800 123 3456</li>
                                    <li><i className="fa fa-angle-right" />Email: info@anybiz.co</li>
                                </ul>
                                <ul className="list-inline shop-social">
                                    <li><a href="#"><i className="fb rounded-md fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="tw rounded-md fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="gp rounded-md fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="yt rounded-md fa fa-youtube" /></a></li>
                                </ul>
                            </div>
                            {/* End About */}
                            {/* Simple List */}
                            <div className="col-md-2 col-sm-3">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Secciones</h2>
                                        <ul className="list-unstyled simple-list margin-bottom-20">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li><a href="#">Francisco papa</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Temas</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li><a href="#">Francisco papa</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Utilidades</h2>
                                        <ul className="list-unstyled simple-list margin-bottom-20">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Documentos</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li><a href="#">Francisco papa</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Publicidad</h2>
                                        <ul className="list-unstyled simple-list margin-bottom-20">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li><a href="#">Francisco papa</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Contacto</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li><a href="#">Documentos </a></li>
                                            <li><a href="#">Francisco papa</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Utilidades</h2>
                                        <ul className="list-unstyled simple-list margin-bottom-20">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Documentos</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><a href="#">Ultima Hora</a></li>
                                            <li><a href="#">Exclusiva</a></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Simple List */}
                        </div>{/*/end row*/}
                    </div>{/*/end continer*/}
                </div>{/*/footer*/}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    2014 © Unify. ALL Rights Reserved.
                                    <a target="_blank" href="https://twitter.com/htmlstream">Htmlstream</a> | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-inline sponsors-icons pull-right">
                                    <li><i className="fa fa-cc-paypal" /></li>
                                    <li><i className="fa fa-cc-visa" /></li>
                                    <li><i className="fa fa-cc-mastercard" /></li>
                                    <li><i className="fa fa-cc-discover" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>{/*/copyright*/}
            </div>
        );
    }
}