import { useState } from "react";
import './ItemCount.css'; 
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        } 
    }

    const decrement = () => {
        if (quantity > initial) {
            setQuantity(quantity -1)
        }
    }

    return (
        <>
            <div className='Counter'>
                <Button className='btn' onClick={decrement}>-</Button>
                <h4>{quantity}</h4>
                <Button className='btn' onClick={increment}>+</Button>
            </div>
            <Button className='btn'  onClick={() => onAdd(quantity)} disabled ={!stock}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;