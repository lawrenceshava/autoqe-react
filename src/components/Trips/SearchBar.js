import React from "react";
import {Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, InputGroup, Label} from "react-bootstrap";
import moment from "moment";
// import Autocomplete from 'react-google-autocomplete';
import trip from "../../img/logo/carp_g.svg";
import locFrom from "../../img/icons/material/loc1.svg";
import locTo from "../../img/icons/material/loc3.svg";
import MediaQuery from "react-responsive";

export default class SearchBarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            address: 'Buenos Aires, Ar'
        };
        this.onChange = (address) => this.setState({ address });
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <div className="Container" style={{textAlign: 'center'}}>
                <MediaQuery maxDeviceWidth={740}>
                    <img src={trip} className="main-icon"/> &nbsp;
                    <h4 style={{display: 'inline'}}>
                        <Label className="btn-fine" bsSize="lg">
                            Carpooling
                        </Label>
                    </h4>
                </MediaQuery>
                <Form inline style={{display: 'inline-block'}}>
                    <FormGroup controlId="formInlineFrom" style={{display: 'inline'}}>
                        <ControlLabel> &nbsp;  &nbsp; De: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon style={{minWidth: 36}}>
                                <img src={locFrom} style={{marginLeft: -10}} height={30}/>
                            </InputGroup.Addon>
                            <FormControl style={{height: 'unset'}} type="text" placeholder="Buenos Aires"/>
                            {/*<PlacesAutocomplete id="from" inputProps={inputProps} />*/}
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom" style={{display: 'inline-block'}}>
                        <ControlLabel> &nbsp; &nbsp; A: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon style={{minWidth: 36}}>
                                <img src={locTo} style={{marginLeft: -10}} height={30}/>
                            </InputGroup.Addon>
                            <FormControl style={{height: 'unset'}} height={30} className="inputForm" type="text"
                                         placeholder="Córdoba"/>
                            {/*<PlacesAutocomplete id="to" inputProps={inputProps} />*/}
                            {/*<PlacesAutocomplete id="from" inputProps={inputProps} placeholder="Mar del Plata"/>*/}
                            {/*<FormControl className="inputForm" id="to" type="text" placeholder="Mar del Plata"/>*/}
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; &nbsp; Cuándo: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon style={{minWidth: 32}}>
                                <Glyphicon glyph="calendar"/>
                            </InputGroup.Addon>
                            <FormControl className="inputForm" type="date" placeholder="Hoy"/>
                            {/*<SingleDatePicker*/}
                            {/*date={this.state.date} // momentPropTypes.momentObj or null*/}
                            {/*onDateChange={date => this.setState({date})} // PropTypes.func.isRequired*/}
                            {/*focused={this.state.focused} // PropTypes.bool*/}
                            {/*onFocusChange={({focused}) => this.setState({focused})} // PropTypes.func.isRequired*/}
                            {/*/>*/}
                            {/*<FormControl className="inputForm" type="date" placeholder="Hoy"  />*/}
                        </InputGroup>
                        &nbsp;
                        <Button type="submit" className="btn-fine" style={{display: 'inline'}}>
                            <Glyphicon glyph="search"/> &nbsp; Encontrá tu viaje
                        </Button>
                    </FormGroup>
                    &nbsp; &nbsp;
                </Form>
            </div>
        );
    }
}