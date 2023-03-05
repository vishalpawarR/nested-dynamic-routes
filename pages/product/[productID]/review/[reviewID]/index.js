import React from 'react';
import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter();
    const reviewId = router.query.reviewID;
    const productId = router.query.productID;
    return (
        <h1>Review {reviewId} for Product {productId}</h1>
    )
}