import { notFound } from 'next/navigation';
import React from 'react'

const ReviewDetail = ({params}:{params: {productId: string, reviewId: string}}) => {
  if(parseInt(params.reviewId) > 1000) {
    notFound();
  };
  return (
    <h1>
      Review {params.reviewId} for products {params.productId}
    </h1>
  )
}

export default ReviewDetail
