import React from 'react';
import {Link} from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostCabin from './PostCabin';
import Admin from './Admin'



export default function Adminlayout (props) {
    return (
      <Router>
        <p>Hello from Adminlayout</p>
        <Link to='/PostCabin'>
            <span>Legg til ny hytte</span>
        </Link>
        <Switch>
          <Route path='/' exact component={Admin} />
          <Route path='/PostCabin' component={PostCabin} />
        </Switch>
      </Router>
    )
  }