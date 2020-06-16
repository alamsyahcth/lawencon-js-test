import React, { Component } from 'react';
import '../../App.css';

class Bus extends Component {
  render () {
    return (
      <div className="container p-5">
        <div className="card shadow mb-5 p-3">
          <form>
            <div className="row">
              <div className="col-md-4">
                <label>Filter By:</label>
              </div>
              <div className="col-md-4">
                <select className="form-control" name="from">
                  <option>By Bus</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-control" name="from">
                  <option>By Type</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="card shadow">
          <table className="table">
            <thead>
              <tr>
                <th>Bus Name</th>
                <th>Dept. Time</th>
                <th>Coach Type</th>
                <th>Seats Available</th>
                <th>Fare</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Green Line</td>
                <td>10:00 PM</td>
                <td>AC</td>
                <td>36</td>
                <td>1000</td>
                <td><button className="btn btn-danger">View Seats</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Bus
