import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../pages/detail/Detail'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route
                    path='/:category/search/:keyword'
                    component={Catalog}
                />
                <Route
                    path='/:category/:id'
                    component={Detail}
                />
                <Route
                    path='/:category'
                    component={Catalog}
                />
                <Route
                    path='/'
                    exact
                    component={Home}
                />
            </Switch>
        </div>
    )
}

export default Routes
