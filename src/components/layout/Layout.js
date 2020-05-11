import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './home/Home';
import Cabins from './cabins/Cabins';
import ContactPage from './contact-page/ContactPage';
import Login from './login/Login';

export default function Layout (props) {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Cabins' component={Cabins} />
                <Route path='/ContactPage' component={ContactPage} />
                <Route path='/Login' component={Login} />
            </Switch>
        </Router>
    )
}