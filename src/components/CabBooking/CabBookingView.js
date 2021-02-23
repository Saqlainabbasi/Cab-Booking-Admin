import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllBookings } from '../../Store/actions'

class CabBookingView extends Component {

    componentWillMount() {
        this.props.dispatch(getAllBookings())
    }

    showBookings = (cab) => (
        cab.bookings ?
            cab.bookings.map((item) => (
                <tr key={item._id}>
                    <td>
                        {item.userName}

                    </td>
                    <td>{item.cabId}</td>
                    <td>{item.route.orgAdrs}</td>
                    <td>{item.route.distAdrs}</td>
                    <td>Rs {item.rate}</td>
                    {/* <td><button onClick={() => { this.props.dispatch(deleteRate(item._id)) }}>Delete</button></td> */}


                </tr>
            ))
            : null
    )
    // redirectUser = () => {
    //     setTimeout(() => {
    //         this.props.dispatch(getAllCabRate())
    //     }, 1000)
    // }

    render() {
        console.log(this.props.rates)
        let bk = this.props.rates
        return (
            <div className="user_posts">
                <h4>Cab Booking View</h4>
                {/* {bk.deletedrate ?
                    <div className='red_tag'>
                        post Deleted !!
                    {this.redirectUser()}
                    </div>
                    : null} */}
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Cab Id</th>
                            <th>To</th>
                            <th>From</th>
                            <th>Rate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showBookings(bk)}
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
export default connect(mapStateToProps)(CabBookingView);