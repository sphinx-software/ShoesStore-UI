import React, { Component } from 'react';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";

export default class Footer extends Component {
    render() {
        return (
            <Nav>
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
                                <Nav href="index.html"><img className="footer-logo" src="assets/img/logo-2.png" alt={'footer-logo'} /></Nav>
                                <p>About Unify dolor sit amet, consectetur adipiscing elit. Maecenas eget nisl id libero tincidunt sodales.</p>
                                <br />
                                <ul className="list-unstyled address-list margin-bottom-20">
                                    <li><i className="fa fa-angle-right" />California, US, Lorem Lis Street, Orange, 25</li>
                                    <li><i className="fa fa-angle-right" />Phone: 800 123 3456</li>
                                    <li><i className="fa fa-angle-right" />Fax: 800 123 3456</li>
                                    <li><i className="fa fa-angle-right" />Email: info@anybiz.co</li>
                                </ul>
                                <ul className="list-inline shop-social">
                                    <li><NavLink href="#"><i className="fb rounded-md fa fa-facebook" /></NavLink></li>
                                    <li><NavLink href="#"><i className="tw rounded-md fa fa-twitter" /></NavLink></li>
                                    <li><NavLink href="#"><i className="gp rounded-md fa fa-google-plus" /></NavLink></li>
                                    <li><NavLink href="#"><i className="yt rounded-md fa fa-youtube" /></NavLink></li>
                                </ul>
                            </div>
                            {/* End About */}
                            {/* Simple List */}
                            <div className="col-md-2 col-sm-3">
                                <div className="row">
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Secciones</h2>
                                        <ul className="list-unstyled simple-list margin-bottom-20">
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Temas</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
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
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Documentos</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
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
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Contacto</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
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
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-xs-6">
                                        <h2 className="thumb-headline">Documentos</h2>
                                        <ul className="list-unstyled simple-list">
                                            <li><NavLink href="#">Ultima Hora</NavLink></li>
                                            <li><NavLink href="#">Exclusiva</NavLink></li>
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
                            <div className="col-md-12">
                                <center>
                                    <h4>
                                        2019 © TimKeoVN. ALL Rights Reserved.
                                        <br/>
                                        <NavLink target="_blank" href="https://timkeo.vn">TimKeoVN</NavLink> |
                                        <NavLink href="https://bitly.vn/8da0">Our Page</NavLink> |
                                        <NavLink href="https://bitly.vn/8da5">Nhà Đầu Tư Kim Cương</NavLink>
                                    </h4>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>{/*/copyright*/}
            </div>
            </Nav>
        );
    }
}