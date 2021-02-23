import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRules, deleteRule } from '../../Store/actions'

class Rulesview extends Component {

    componentWillMount() {
        this.props.dispatch(getRules())
    }

    showRules = (rules) => (
        rules.rule ?
            rules.rule.map((item) => (
                <tr key={item._id}>
                    <td>
                        {item.orgAdrs}

                    </td>
                    <td>{item.orgArea}</td>
                    <td>{item.distAdrs}</td>
                    <td>{item.distArea}</td>
                    <td>{item.status}</td>
                    <td>{item.rateType}</td>
                    <td><button onClick={() => this.props.dispatch(deleteRule(item._id))}>Delete</button></td>
                </tr>
            ))
            : null
    )

    redirectUser = () => {
        setTimeout(() => {
            this.props.dispatch(getRules())
        }, 1000)
    }


    render() {
        // console.log(this.props)
        let rules = this.props.rules
        return (

            <div className="user_posts">

                <h4>Rules View</h4>
                {rules.deletedrule ?
                    <div className='red_tag'>
                        post Deleted !!
                        {this.redirectUser()}
                    </div>
                    : null}
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>From Area</th>
                            <th>To</th>
                            <th>To Area</th>
                            <th>Status</th>
                            <th>Rate Type</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.showRules(rules)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        rules: state.rules
    }
}
export default connect(mapStateToProps)(Rulesview);