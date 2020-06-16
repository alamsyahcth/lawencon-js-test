import React, { Component } from 'react';
import { Route, NavLink, HashRouter, BrowserRouter } from 'react-router-dom';


import Home from './pages/home';
import Bus from './pages/bus';

class Main extends Component {
  render () {
    return(
      <HashRouter>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-light shadow">
              <div className="container">
                <a className="navbar-brand"><img src="https://i.imgur.com/hXDjMzX.png" width="30%" /></a>
                <div className="d-flex">
                  <button className="btn btn-danger my-2 my-sm-0 mr-3" type="submit">Sign Up</button>
                  <button className="btn btn-danger my-2 my-sm-0" type="submit">Login</button>
                </div>
              </div>
            </nav>
            <nav className="bg-danger">
              <div className="container py-3">
                <NavLink to="/">
                  <p style={{ color: '#ffffff' }}>Home</p>
                </NavLink>
              </div>
            </nav>
          </div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/bus" component={Bus} />
          </div>
        </BrowserRouter>
      </HashRouter>
    )
  }
}

export default Main;