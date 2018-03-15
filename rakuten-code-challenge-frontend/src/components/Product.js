import React from 'react'

const Product = (props) => {
  return (
    <tr>
      <td>{props.product_name}</td>
      <td>{props.sku}</td>
      <td>{props.advertiser.advertiser_name}</td>
    </tr>
  )
}

export default Product
