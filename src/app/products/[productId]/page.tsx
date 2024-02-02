import React from 'react'

const ProductsDetails = ({params}: {params: {productId: string}}) => {
  return (
    <h1>Details about products {params.productId}</h1>
  )
}

export default ProductsDetails
