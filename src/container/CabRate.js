import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCabRate } from '../Store/actions';



class CabRate extends Component {
    state = {
        formdata: {
            rate: '',
            km: '',
            price: '',
        }
    }

    //to handle the data entry by react controled component.....
    handleChange = (event, name) => {
        //making the copy of the state,to prevent direct mutation....
        let newformdata = { ...this.state.formdata }

        newformdata[name] = event.target.value

        this.setState({
            formdata: newformdata
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        // console.log(this.state.formdata)
        this.props.dispatch(addCabRate(this.state.formdata))
    }


    render() {
        console.log(this.state)
        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>Add Cab Rate</h2>


                    <div className='form_element'>
                        <label>Rate</label>
                        <select

                            value={this.state.formdata.rate}
                            onChange={(event) => this.handleChange(event, "rate")}

                        >
                            <option value='fixed'>Fixed</option>
                            <option value='dynamic'>Dynamic</option>

                        </select>

                    </div>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter distance km'
                            value={this.state.formdata.km}
                            onChange={(event) => this.handleChange(event, "km")}
                        />
                    </div>
                    <div className='form_element'>
                        <input
                            type='text'
                            placeholder='Enter Price'
                            value={this.state.formdata.price}
                            onChange={(event) => this.handleChange(event, "price")}
                        />
                    </div>


                    <button type='submit'>Save</button>

                </form>
                {this.props.rates.success ? <h1>{"Data Saved"}</h1> : null}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        rates: state.rates
    }
}
export default connect(mapStateToProps)(CabRate);