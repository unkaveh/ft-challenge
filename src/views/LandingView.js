import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from '../components/Navbar/Navbar';
import StocksWidget from '../components/StocksWidget/StocksWidget';
import SingleStockWidget from '../components/SingleStockWidget/SingleStockWidget';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SingleStockWidget />
        <StocksWidget />
      </div>
    )
  }
}

export default NavBar