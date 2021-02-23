import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCabRate, deleteRate } from '../../Store/actions'

class CabRateView extends Component {

    componentWillMount() {
        this.props.dispatch(getAllCabRate())
    }

    showRules = (fares) => (
        fares.fare ?
            fares.fare.map((item) => (
                <tr key={item._id}>
                    <td>
                        {item.rate}

                    </td>
                    <td>{item.km} km</td>
                    <td>Rs {item.price}</td>
                    <td><button onClick={() => { this.props.dispatch(deleteRate(item._id)) }}>Delete</button></td>


                </tr>
            ))
            : null
    )
    redirectUser = () => {
        setTimeout(() => {
            this.props.dispatch(getAllCabRate())
        }, 1000)
    }

    render() {
        console.log(this.props.rates)
        let fares = this.props.rates
        return (
            <div className="user_posts">
                <h4>Cab Rate View</h4>
                {fares.deletedrate ?
                    <div className='red_tag'>
                        post Deleted !!
                    {this.redirectUser()}
                    </div>
                    : null}
                <table>
                    <thead>
                        <tr>
                            <th>Fare Type</th>
                            <th>Range km</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showRules(fares)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rates: state.rates
    }
}
export default connect(mapStateToProps)(CabRateView);