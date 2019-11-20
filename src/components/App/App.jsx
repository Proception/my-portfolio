import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import PortfolioView from '../../views/PortfolioView.jsx';


export default class App extends Component {

  render() {
    return (
      <PortfolioView />
    );
  }
}
