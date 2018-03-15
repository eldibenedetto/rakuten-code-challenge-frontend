import React from 'react'
import Product from './Product'

class ProductsList extends React.Component {

  handlePreviousButton = () => {
    this.props.previousProducts()
  }

  handleNextButton = () => {
    this.props.nextProducts()
  }

  render () {

    const productRows = this.props.products.map(product => {
      return (
        <Product key={product.id} {...product}/>
      )
    })

    const scrolling = this.props.page <= 1 ? <div className="ui icon buttons">
      <button onClick={this.handlePreviousButton} className="ui disabled button"><i className="angle left icon"></i></button>
      <button onClick={this.handleNextButton} className="ui positive button"><i className="angle right icon"></i></button>
    </div> : <div className="ui icon buttons">
      <button onClick={this.handlePreviousButton} className="ui negative button"><i className="angle left icon"></i></button>
      <button onClick={this.handleNextButton} className="ui positive button"><i className="angle right icon"></i></button>
    </div>

  return (
    <div>
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Product Name</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">SKU</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Advertiser</h3>
            </th>
          </tr>

            {productRows}

        </tbody>
      </table>

      {scrolling}

    </div>
    )
  }
}

export default ProductsList
