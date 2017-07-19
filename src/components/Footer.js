import React, {Component} from "react";
import img from "../";

class FooterComponent extends Component {
    render() {
        return (
            <footer style={{textAlign: 'center'}}>
                <div className="container"/>
                <img src=""/>
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-inline">
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li className="footer-menu-divider">⋅</li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li className="footer-menu-divider">⋅</li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li className="footer-menu-divider">⋅</li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <p className="copyright text-muted small">Copyright © Autoqe 2017. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
