import { useContext } from "react"
import cart from"./assets/cart.png"
import {CartContext } from "../../context/CartContext"

function CartWidget () {
    const itemsContext = useContext(CartContext);
    return (
        <div>
            <img src={cart} alt="cart-widget" width={50} height={50}/> 0
        </div>
    )
}

export default CartWidget