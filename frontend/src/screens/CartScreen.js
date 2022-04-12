import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import {useDispatch} from 'react-redux'

const CartScreen = ( props ) => {
    let location = useLocation();
    const params = useParams();
    const { id: productId } = params;
    const qty = location.search ? Number( location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
    <div>
        <h1>Cart Screen</h1>
        <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
    </div>
    )
}

export default CartScreen
