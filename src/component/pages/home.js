import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Home extends Component{
  constructor() {
    super();
    this.state={
      startDate : new Date(),
      data: '',
      selectedOption: '',
    }
  }

  handleChangeData = date => {
    this.setState({
      startDate: date
    });
  };

  handleChange(id) {
    console.log(id)
    this.setState({
      data : id,
    })
  }

  _showData() {
    if(this.state.data === 'dhaka') {
      return (
        <select className="form-control" name="from">
          <option>Dhaka</option>
          <option>Chomila</option>
          <option>Nangka</option>
        </select>
      )
    } else if (this.state.data === 'chomila') {
      return (
        <select className="form-control" name="from">
          <option>Jakarta</option>
          <option>Chomila</option>
          <option>Nangka</option>
        </select>
      ) 
    } else if (this.state.data === 'chittagong') {
      return (
        <select className="form-control" name="from">
          <option>Merak</option>
          <option>Chomila</option>
          <option>Nangka</option>
        </select>
      )
    }
  }

  render() {
   
    return(
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card m-5 p-4 shadow">
                <form className="form-horizontal">
                  <div className="form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Leaving From</label>
                          <select className="form-control" name="from" onClick={this.handleChange.bind(this, 'chomila')} value={this.state.selectedOption}>
                            <option>Dhaka</option>
                            <option>Chomila</option>
                            <option>Chitagong</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="control-label">Going To</label>
                          {this._showData()}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="control-label">Departing On</label><br/>
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChangeData}
                            className="form-control data-datepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <NavLink to="/bus" style={{ textDecoration: 'none' }}>
                          <button className="btn btn-danger btn-block">Search Bus</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 p-5">
              <img src="https://i.imgur.com/qizHZdZ.png" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;