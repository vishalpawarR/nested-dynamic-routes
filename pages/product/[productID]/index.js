import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const productId = router.query.productID;
    return (
        <h1>The product details of the product id: {productId}</h1>
    )
}