import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, clearCart, totalQuality, totalPrice } = useContext(CartContext)

    if (totalQuality === 0) {
        return (
            <div>
                <h4>No hay Items en el Carrito</h4>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }
    return
    {
        <div>
            cart.map()
        </div>
    }

}

export default Cart;