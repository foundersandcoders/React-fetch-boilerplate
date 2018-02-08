import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

var standardHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

class ApiData extends Component {

  constructor () {
    super ();
    this.state = {data: undefined};
  }

  componentDidMount () {
    fetch ('/api',standardHeaders)
      .then ( result => result.json())
      .then ( json => {
        this.setState ({data : json.data || 'NOTHING'}) ;
        console.log ('data',json.data,'\nstate: ',this.state);
      })
      // .then ( result => console.log (result.json()) )
      .catch ( err => {console.log(err)} )
  }

  render() {
    return (
      <div className="ApiResult">
        <p className="ResultInnerP">
          I fetched: {this.state.data}
        </p>
      </div>
    );
  }
}

export default ApiData
