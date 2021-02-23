import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout';
import AddRule from './container/AddRule';
import Rulesview from './components/Rule/Rulesview';
import CabRate from './container/CabRate';
import CabRateView from './components/CabFare/cabFareView'
import CabBookingView from './components/CabBooking/CabBookingView';

export default function routes() {
    return (
        <div>

            <Layout>
                <Switch>
                    <Route exact path='/' component={AddRule} />
                    <Route exact path='/cab/ruleView' component={Rulesview} />
                    <Route exact path='/cab/addRate' component={CabRate} />
                    <Route exact path='/cab/cabRateView' component={CabRateView} />
                    <Route exact path='/cab/cabBookingView' component={CabBookingView} />
                </Switch>
            </Layout>
        </div>
    )
}
