import React, { Component } from 'react';
import ProductsContainer from './components/ProductsContainer'
import './stylesheets/App.css'


class App extends Component {
  render() {
    return (
      <div classsName="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>Rakuten Marketing Products</h2>
        </div>
          <ProductsContainer />
      </div>
    );
  }
}

export default App;
