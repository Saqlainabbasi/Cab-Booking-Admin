import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { connect } from 'react-redux';
import { addRule } from '../Store/actions';

class AddRule extends Component {


    state = {

        orgAdrs: "",
        orgCords: {
            lat: null,
            lag: null
        },
        orgArea: '',
        orgPlaceObj: '',

        distAdrs: "",
        distCords: {
            lat: null,
            lag: null
        },
        distArea: '',
        distPlaceObj: '',
        status: '',
        rateType: ''


    }
    //
    //function to handle the checkbox change event.....
    //
    handleCheckBox = (event, name) => {
        if (name === "distCheckbox" && event.target.checked) {
            this.setState({
                ...this.state,
                distArea: 'any'
            })
        }
        if (name === "orignCheckbox" && event.target.checked) {
            this.setState({
                ...this.state,
                orgArea: 'any'
            })
        }
    }
    //
    //function to handle the area textbox....
    //
    handleAreaChange = (event, name) => {
        if (name === 'areadist') {
            let km = event.target.value
            this.setState({
                ...this.state,
                distArea: km
            })
        }
        if (name === 'areaorign') {
            let km = event.target.value
            this.setState({
                ...this.state,
                orgArea: km
            })
        }
    }
    //
    //function to handle the change event in the To and From and Status textbox...........
    //
    handleChange = (event, name) => {
        if (name === "startP") {

            let adrs = event

            this.setState({
                ...this.state,
                orgAdrs: adrs
            })
        }
        if (name === "endP") {
            let adrs = event
            this.setState({
                ...this.state,
                distAdrs: adrs
            })
        }
        if (name === "status") {
            let st = event.target.value
            this.setState({
                ...this.state,
                status: st
            })
        }
        if (name === "rate") {
            let rt = event.target.value
            this.setState({
                ...this.state,
                rateType: rt
            })
        }
    }
    //
    //function to handle the selected place from the Fromtextbox.......
    //
    handleSelectedDist = async value => {
        const results = await geocodeByAddress(value);
        const eAdrs = results[0].formatted_address;
        const latLng = await getLatLng(results[0]);
        console.log(results)
        this.setState({
            ...this.state,
            distAdrs: eAdrs,
            distCords: latLng,
            distPlaceObj: results
        })
    };
    //
    //function to handle the selected place from the Totextbox.......
    //
    handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const sAdrs = results[0].formatted_address;
        const latLng = await getLatLng(results[0]);
        console.log(results)
        this.setState({
            ...this.state,
            orgAdrs: sAdrs,
            orgCords: latLng,
            orgPlaceObj: results
        })
    };
    //
    //function to submit the form using the dispatch method.....
    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addRule(this.state))
    }



    render() {
        // console.log(this.state)
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Add Rule</h2>

                    <label style={{ textAlign: 'right' }}>From </label>
                    <div className='form_element'>
                        <PlacesAutocomplete
                            value={this.state.orgAdrs}
                            onChange={event => this.handleChange(event, "startP")}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>


                                    <input {...getInputProps({ placeholder: "Type address" })} />

                                    <div className='article'>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {

                                                boxSizing: `border-box`,
                                                border: `1px solid transparent`,
                                                width: `100%`,
                                                height: `32px`,
                                                padding: `0 12px`,
                                                borderRadius: `3px`,
                                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                                fontSize: `14px`,
                                                outline: `none`,
                                                textOverflow: `ellipses`,
                                            };

                                            return (
                                                <div  {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>

                    </div>

                    <label style={{ textAlign: 'right' }}>Orign Area Zone(km)</label>
                    <div className='form_element'>
                        <input
                            type='text'
                            value={this.state.orgArea}
                            placeholder="Enter the Area in km"
                            onChange={event => this.handleAreaChange(event, 'areaorign')}
                        />

                    </div>
                    <div className='form_element' >
                        <label>Orign Area Zone</label>
                        <label>
                            <input
                                style={{ width: '60px' }}
                                type='checkbox'

                                onChange={event => this.handleCheckBox(event, "orignCheckbox")}
                            />
                        any</label>

                    </div>
                    <hr style={{ margin: '20px 160px 20px 160px' }}></hr>
                    <label style={{ textAlign: 'right' }}>To </label>
                    <div className='form_element'>
                        <PlacesAutocomplete
                            value={this.state.distAdrs}
                            onChange={event => this.handleChange(event, "endP")}
                            onSelect={this.handleSelectedDist}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>


                                    <input {...getInputProps({ placeholder: "Type address" })} />

                                    <div className='article'>
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {

                                                boxSizing: `border-box`,
                                                border: `1px solid transparent`,
                                                width: `100%`,
                                                height: `32px`,
                                                padding: `0 12px`,
                                                borderRadius: `3px`,
                                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                                fontSize: `14px`,
                                                outline: `none`,
                                                textOverflow: `ellipses`,
                                            };

                                            return (
                                                <div  {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>

                    </div>

                    <label style={{ textAlign: 'right' }}>Destination Area Zone(km)</label>
                    <div className='form_element'>
                        <input
                            type='text'
                            value={this.state.distArea}
                            placeholder="Enter the Area in km"
                            onChange={event => this.handleAreaChange(event, 'areadist')}
                        />

                    </div>
                    <label>Destination Area Zone</label>
                    <div className='form_element'>
                        <label>
                            <input
                                style={{ width: '60px' }}
                                type='checkbox'
                                onChange={event => this.handleCheckBox(event, 'distCheckbox')}
                            />
                        any</label>
                    </div>

                    <div className='form_element'>
                        <label>Status</label>
                        <select
                            require
                            style={{ width: '1000px' }}
                            value={this.state.status}
                            onChange={(event) => this.handleChange(event, "status")}

                        >
                            <option val='available'>Available</option>
                            <option val='removed'>Removed</option>

                        </select>

                    </div>
                    <div className='form_element'>
                        <label>Rate Type</label>
                        <select
                            style={{ width: '1000px' }}
                            value={this.state.rateType}
                            onChange={(event) => this.handleChange(event, "rate")}

                        >
                            <option value='fixed'>Fixed</option>
                            <option value='dynamic'>Dynamic</option>

                        </select>

                    </div>

                    <button type='submit'>Add Rule</button>

                </form>
                {this.props.rules.success ? <div className="success">Rule Saved </div> : null}
            </div >
        );
    }
}
function mapStateToProps(state) {
    return {
        rules: state.rules
    }
}
export default connect(mapStateToProps)(AddRule);