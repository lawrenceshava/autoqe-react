import React from "react";
import {Button, Glyphicon, Image, Label, Row} from "react-bootstrap";
import Responsive from 'react-responsive';

import srvCarp from "../../img/banner/mockup-carPool.png";
import srvShare from "../../img/banner/mockup-carShare.png";
import srvPark from "../../img/banner/parking4.jpg";
import srvElec from "../../img/banner/elec_xs.png";

import trip from "../../img/logo/carp_g.svg";
import car from "../../img/logo/car_g.svg";
import park from "../../img/logo/park_g.svg";
import elec from "../../img/logo/elec_g.svg";
import money from "../../img/icons/material/money.svg";
import share from "../../img/icons/material/hand-shake.svg";
import time from "../../img/icons/material/fast.svg";

// Default (desktop, tablet) and mobile setup
const Default = ({children}) => <Responsive minWidth={640} children={children}/>;
const Mobile = ({children}) => <Responsive maxWidth={640} children={children}/>;

export default class ServiceComp extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="grid-row-two-up-skinny">
                    {/*Carpooling*/}
                    <div className="grid-item sub-section" style={{marginTop: '3vh'}}>
                        <Row className="sub-section-title">
                            <h3>
                                <img src={trip} className="main-icon"/>
                                <span className="main-service">Carpooling:</span> Compartí trayectos
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>Dividí los gastos del viaje con otros pasajeros.</p>
                            <Row>
                                <img className="icon-row" src={share}/>
                                <b>Compartí</b> rutas, viajes, escapadas de fin de semana, trayectos cortos...
                            </Row>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b> Ahorrá</b> hasta un 30% por cada pasajero o trayecto
                            </Row>
                            <p/>
                            <Button className="btn-light_w"><Glyphicon glyph="search" className="icon-glyph"/>
                                Encontrá</Button>&nbsp;
                            <Button bsStyle="primary"><Glyphicon glyph="plus-sign" className="icon-glyph"/> Publicá
                                trayecto:</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvCarp}/>
                    </div>

                    {/*Car rental*/}
                    <Default>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                    </Default>
                    <div className="grid-item sub-section" style={{marginTop: '3vh'}}>
                        <Row className="sub-section-title">
                            <h3>
                                <img src={car} className="main-icon"/>
                                <span className="main-service">Alquiler de
                                    Autos</span> entre particulares
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>Un vehículo a tu disposición cuando lo necesités.</p>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Ahorrá</b> plata en el mantenimiento del auto
                            </Row>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Simplificá</b> trámites con nuestra app
                            </Row>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Seguro</b> contra todo riesgo durante el periódo del alquiler
                            </Row>
                            <p/>
                            <Button className="btn-light_w"><Glyphicon glyph="search" className="icon-glyph"/>
                                Alquilá</Button>&nbsp;
                            <Button bsStyle="primary"><Glyphicon glyph="plus-sign" className="icon-glyph"/> Publicá tu
                                Auto</Button>
                        </div>
                    </div>
                    <Mobile>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvShare}/>
                        </div>
                    </Mobile>

                    {/*Garage*/}
                    <div className="grid-item sub-section" style={{marginTop: '1vh'}}>
                        <Row className="sub-section-title">
                            <h3><img src={park} className="main-icon"/>
                                <span className="main-service">Alquiler de Cocheras</span> entre particulares
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>La cochera cuando y dónde la necesitás</p>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Tiempo</b> No creeras lo fácil que es
                            </Row>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Dinero</b> Mucho más barato que cualquier agencia de alquiler
                            </Row>
                            <Row>
                                <img src={money} className="icon-row"/>
                                <b>Seguro</b> de hogar durante el periodo del alquiler
                            </Row>
                            <p/>
                            <Button className="btn-light_w"><Glyphicon glyph="search" className="icon-glyph"/>
                                Encontrá</Button>&nbsp;
                            <Button bsStyle="primary"><Glyphicon glyph="plus-sign" className="icon-glyph"/> Alquilá
                                cochera</Button>
                        </div>
                    </div>
                    <div className="grid-item sub-section">
                        <Image responsive src={srvPark} className="img-service" style={{borderRadius: '50%'}}/>
                    </div>

                    {/*Electric*/}
                    <Default>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec} className="img-service"/>
                        </div>
                    </Default>
                    <div className="grid-item sub-section" style={{marginTop: '1vh'}}>
                        <Row className="sub-section-title">
                            <h3><img src={elec} className="main-icon"/>
                                <span className="main-service">Autos eléctricos</span> por horas &nbsp;
                            </h3>
                        </Row>
                        <div className="sub-section-text">
                            <p>El auto eléctrico por fin llegó a Buenos Aires!</p>
                            <Row>
                                <img src={time} className="icon-row"/>
                                <b>Por horas</b> Cúando quieras y dónde lo necesitás.
                            </Row>
                            <p/>
                            <Button className="btn-light_w"><Glyphicon glyph="search" className="icon-glyph"/> Encontrá
                                auto eléctrico</Button>&nbsp;
                            <Label bsStyle="warning">Próximamente</Label>

                        </div>
                    </div>
                    <Mobile>
                        <div className="grid-item sub-section">
                            <Image responsive src={srvElec} className="img-service"/>
                        </div>
                    </Mobile>
                </div>
            </section>
        );
    }
}
