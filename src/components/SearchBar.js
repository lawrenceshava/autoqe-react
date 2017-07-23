import React from "react";
import {Button, ControlLabel, Form, FormControl, FormGroup, Glyphicon, InputGroup} from "react-bootstrap";
// import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";
// import Autocomplete from 'react-google-autocomplete';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import trip from "./../img/logo/carp_g.svg";
import locFrom from "../img/icons/material/location2.svg";
import locTo from "../img/icons/material/location.svg";

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

    handleFormSubmit = (event) => {
        event.preventDefault();

        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    };

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        };

        return (
            <div className="Container" style={{textAlign: 'center'}}>
                <img src={trip} height={60}/>
                <Form inline className="inline-fit" style={{display: 'inline'}}>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; De: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <img src={locFrom} height={30}/>
                            </InputGroup.Addon>
                            {/*<FormControl id="from" className="inputForm" type="text" placeholder="Buenos Aires">*/}
                            <PlacesAutocomplete id="from" inputProps={inputProps} />
                            {/*</FormControl>*/}
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; &nbsp; A: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <img src={locTo} height={30}/>
                            </InputGroup.Addon>
                            {/*<PlacesAutocomplete id="to" inputProps={inputProps} />*/}
                            <FormControl className="inputForm" id="to" type="text" placeholder="Mar del Plata"/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup controlId="formInlineFrom">
                        <ControlLabel> &nbsp; &nbsp; Cuándo: &nbsp; </ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="calendar"/>
                            </InputGroup.Addon>
                            <FormControl className="inputForm" type="text" placeholder="Hoy">
                                {/*<SingleDatePicker*/}
                                {/*date={this.state.date} // momentPropTypes.momentObj or null*/}
                                {/*onDateChange={date => this.setState({date})} // PropTypes.func.isRequired*/}
                                {/*focused={this.state.focused} // PropTypes.bool*/}
                                {/*onFocusChange={({focused}) => this.setState({focused})} // PropTypes.func.isRequired*/}
                                {/*/>*/}
                            </FormControl>
                            {/*<FormControl className="inputForm" type="date" placeholder="Hoy"  />*/}
                        </InputGroup>
                        &nbsp;
                        <Button type="submit" bsStyle="custom">
                            <Glyphicon glyph="search"/> &nbsp; Encontrá tu viaje
                        </Button>
                    </FormGroup>
                    &nbsp; &nbsp;
                </Form>
            </div>
        );
    }
}
