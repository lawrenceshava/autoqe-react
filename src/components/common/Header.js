import React from "react";
import {Carousel} from "react-bootstrap";
import {TimerMixin} from "react-timer-mixin";
import "../home/carousel.css"
//Icons
import SearchTrip from "../Trips/SearchTrip";

export default class Header extends React.Component {

    // onLoadStart={(e) => this.setState({loading: true})}
    constructor(props) {
        super(props);
        this.state = {
            imageStatus: 'loading',
            index: 0,
            direction: 'next'
        };
        setInterval(() => {
            const aux =  this.state.index;
            this.setState({index: aux/*<3?aux+1:0*/});
        },12000);
        this._setArrowContent = this._setArrowContent.bind(this);
        this._setTabContent = this._setTabContent.bind(this)
    }

    _setTabContent(eventKey) {
        this.setState({
            direction: this.state.index >= eventKey ? 'prev' : 'next',
            index: eventKey,
        });
    }

    _setArrowContent(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    handleImageLoaded() {
        this.setState({imageStatus: 'loaded'});
    }

    handleImageErrored() {
        this.setState({imageStatus: 'failed to load'});
    }

    render() {
        // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
        // let condTab = cx({
        //     light-text
        //     // base: true,
        //     // inProgress: this.props.store.submissionInProgress,
        //     // error: this.props.store.errorOccurred,
        //     // disabled: this.props.form.valid,
        // });

        return (
            <div>
                <div className="carousel-container">
                    {/*Carpooling*/}
                    <Carousel.Item active animateIn animateOut index={0} className="coverImg cover-rent">
                        <div className="deg-carp">
                            <Carousel.Caption>
                                <h1>Carpooling: compartí viajes</h1>
                                <SearchTrip/>
                                {/*<h3>Ahorrá plata compartiendo los gastos del viaje</h3>*/}
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>

                    {/*Car rental
                    <Carousel.Item active animateIn animateOut index={1} className="coverImg cover-rent">
                        <div className="deg-rent">
                            <Carousel.Caption>
                                <h1>Alquiler de Auto entre particulares</h1>
                                <SearchCar/>
                                <h3>Rentabilizá tu auto mientras no lo usás</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>*/}

                    {/*Parking
                    <Carousel.Item animateIn animateOut index={2} className="coverImg cover-park">
                        <div className="deg-park">
                            <Carousel.Caption>
                                <h1>Alquiler de Cocheras entre particulares</h1>
                                <SearchTrip/>
                                <h3>Perdé el miedo a estacionar en el centro!</h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>*/}

                    {/*Electric
                    <Carousel.Item active animateIn animateOut index={3} className="coverImg cover-elec">
                        <div className="deg-elec">
                            <Carousel.Caption className="">
                                <h1> Alquiler de <b>AUTOS ELÉCTRICOS</b> por horas</h1>
                                <h3>
                                    Dónde y cuándo lo necesités
                                    <p/>
                                    <Link to="/green">
                                        <Label bsSize="lg" bsStyle="success">
                                            <Glyphicon glyph="leaf"/> &nbsp;
                                            Ayudá al medioambiente!
                                        </Label>
                                    </Link>
                                </h3>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>*/}
                </div>

                {/*<TripsPage/>*/}

                {/* <Tab.Container id="header-tabs" activeKey={this.state.index} defaultActiveKey={0}
                               onSelect={this._setTabContent}>
                    <Row className="clearfix header-tabs">
                        <Nav bsStyle="tabs" id="header-tab">
                            <NavItem className="carp-transp " eventKey={0}>
                                <img alt="carpool" src={carp} className="header-icon"/>
                                <h4 id="carp-tab" className="white-text avoid-if-small service-carp"> &nbsp;Carpooling</h4>
                            </NavItem>
                            <NavItem className="rent-transp" eventKey={1}>
                                <img alt="Private car rental" src={rent} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-rent">&nbsp;Autos</h4>
                            </NavItem>
                            <NavItem className=" park-transp " eventKey={2}>
                                <img alt="Private Parking spot rental" src={park} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-park">&nbsp;Cocheras</h4>
                            </NavItem>
                            <NavItem className="elec-transp" eventKey={3}>
                                <img alt="Electric car" src={el} className="header-icon"/>
                                <h4 className="white-text avoid-if-small service-elec">&nbsp;Autos
                                    eléctricos</h4>
                                {/*&nbsp;</b><Label className="avoid-if-small" bsStyle="warning">Próx.</Label>
                            </NavItem>
                        </Nav>
                        <Tab.Content style={{left: 0}} animation>
                            <Tab.Pane eventKey={0}>
                                    <TripsPage/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={1}>
                                    <TripsPage/>
                            </Tab.Pane>
                            <Tab.Pane eventKey={2}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={3}>
                                <Row>
                                    <TripsPage/>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Row>
                </Tab.Container>*/}
            </div>
        );
    }
}
