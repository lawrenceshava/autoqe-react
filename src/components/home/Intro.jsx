import React from "react";
import {Button, Glyphicon, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import android from "../../img/icons/google-play-badge.svg";
import ios from "../../img/icons/app-store-badge.svg";

export default class Intro extends React.Component {
    render() {
        return (
            <section className="section section-dark" id="section-what-it-does">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            {/*<img alt="" src={autoqe_gray} className="main-icon"/>&bnsp;*/}
                            Ahora viajar es más barato, fácil y divetido</h1>
                        <div className="section-header-text">
                            <p>Compartí lo que no usás &nbsp;
                                <Link to="/green">
                                    <Button bsStyle="success">
                                        <Glyphicon glyph="leaf"/> &nbsp;
                                        Ayudando al medioambiente</Button>
                                </Link></p>
                            <p>Todas las soluciones de transporte alrededor tuyo en una única aplicación:</p>

                            {/*<Image responsive src={macbook} height="600" className=""/>*/}
                            {/*<Image responsive src={s8} height="600"  className=""/>*/}
                            <Image src={ios} className="brand-logo"/>
                            <Image src={android} className="brand-logo"/>
                        </div>
                    </div>
                </header>
            </section>
        );
    }
}
