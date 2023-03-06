import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Product from '../containers/Product'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/Cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Product} path="/produtos" />
      </Switch>
    </Router>
  )
}

export default Routes
