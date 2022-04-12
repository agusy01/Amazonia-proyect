import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const CartScreen = ( props ) => {
    let location = useLocation();
    const params = useParams();
    const { id: productId } = params;
    const qty = location.search ? Number( location.search.split('=')[1]) : 1;

    console.log(qty)

    return (
    <div>
        <h1>Cart Screen</h1>
        <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
    </div>
    )
}

export default CartScreen

/* const qty = location.search ? Number( location.search.split('=')[1]) : 1; */