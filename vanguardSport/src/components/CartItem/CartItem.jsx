import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({ id, image, title, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <><div className="title">
            <img src={image} alt={title} />
            <h5 className='name'>{title}</h5>
            <h5 className='price-small'>{price}</h5>
        </div>
            <h5 className='price'>{price}</h5>
            <h5>{quantity}</h5><h5 className='subtotal'>{price * quantity}</h5>
            <button type='button' className='remove-btn' onClick={() => removeItem(id)}>
            </button></>
    )
}
export default CartItem