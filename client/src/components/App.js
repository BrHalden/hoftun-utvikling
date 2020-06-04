import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import Home from './home/Home';
import Cabins from './cabins/Cabins';
import ContactPage from './contact-page/ContactPage';
import Login from './login/Login';
import About from './about/About';
import Admin from './admin/Admin';

export default function App (props) {
  const location = useLocation();
  console.log(location)
  return (
      <div className='app'>
          <AnimatePresence>
              <Switch location={location} key={location.pathname}>
                  <Route path='/' exact component={Home} />
                  <Route path='/Cabins' component={Cabins} />
                  <Route path='/ContactPage' component={ContactPage} />
                  <Route path='/About' component={About} />
                  <Route path='/Login' component={Login} />
                  <Route path='/Admin' component={Admin} />
              </Switch>
          </AnimatePresence>
      </div>
  )
}
