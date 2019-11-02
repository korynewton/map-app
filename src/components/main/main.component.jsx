import React from 'react';
import axios from 'axios';

import Input from '../input/input.component';
import Directions from '../directions/directions.component';

import './main.styles.scss';

import { extractDirections } from '../../utils';

class Main extends React.Component {
  state = {
    to: 'oregon',
    from: 'washington',
    directions: null
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  requestDirections = () => {
    const { REACT_APP_KEY: apiKey, REACT_APP_BASE_URL: baseUrl } = process.env;

    axios
      .get(
        `${baseUrl}key=${apiKey}&from=${this.state.from}&to=${this.state.to}`
      )
      .then(res => {
        const directions = extractDirections(res.data.route.legs);
        this.setState({ directions });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { to, from, directions } = this.state;
    return (
      <div>
        <div className="container">
          <div className="left">
            <h2>From:</h2>
            <Input value={from} handleChange={this.handleChange} name="from" />
          </div>
          <div className="right">
            <h2>To:</h2>
            <Input value={to} handleChange={this.handleChange} name="to" />
          </div>
          <div className="button">
            <button onClick={this.requestDirections}>Get Directions</button>
          </div>
        </div>
        <Directions directions={directions} />
      </div>
    );
  }
}

export default Main;
