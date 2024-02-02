import React from 'react'

const ReviewDetail = ({params}:{params: {productId: string, reviewId: string}}) => {
  return (
    <h1>
      Review {params.reviewId} for products {params.productId}
    </h1>
  )
}

export default ReviewDetail
