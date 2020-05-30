import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Home from './home/Home';
import Cabins from './cabins/Cabins';
import ContactPage from './contact-page/ContactPage';
import Login from './login/Login';
import Admin from './admin/Admin';

export default function Layout (props) {
    const location = useLocation();
    console.log(location)
    return (
        <Router>
            <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/Cabins' component={Cabins} />
                    <Route path='/ContactPage' component={ContactPage} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Admin' component={Admin} />
                </Switch>
            </AnimatePresence>
        </Router>
    )
}