import React from 'react'
import ProductsList from './ProductsList'

const API = "http://localhost:3000/api/v1/products"

class ProductsContainer extends React.Component {

  state = {
    products: [],
    page: 0
  }

  fetchProducts = () => {
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({page: this.state.page + 1}),
      headers: {"Content-Type": 'application/json',
        accept: 'application/json'}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', "Invalid Request"))
    .then(productsData => {
      this.setState({products: productsData, page: this.state.page += 1})
    })
  }

  fetchPreviousProducts = () => {
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({page: this.state.page - 1}),
      headers: {"Content-Type": 'application/json',
        accept: 'application/json'}
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', "Invalid Request"))
    .then(productsData => {
      this.setState({products: productsData, page: this.state.page -= 1})
    })
  }

  componentDidMount() {
    this.fetchProducts()
 }

  render () {
    return (
      <div>
        <ProductsList products={this.state.products} page={this.state.page} previousProducts={this.fetchPreviousProducts} nextProducts={this.fetchProducts} />
      </div>
    )
  }
}

export default ProductsContainer
