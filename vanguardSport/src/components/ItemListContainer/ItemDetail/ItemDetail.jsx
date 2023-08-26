import "../ItemDetail/ItemDetail.css";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount";
import { CartContext } from "../../../context/CartContext";

function ItemDetail({ id, img, title, description, category, price, stock }) {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item ={
            id,title,price
        }
        addItem (item, quantity)
    }
    return (
        <Card className="conteinerCard d-flex flex-row" data-id={id}>
            <Card.Img variant="top" className="imgCard" src={img} />
            <Card.Body className="bodyCard " >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Text className="price">${price}</Card.Text>
                <Card.Footer className="footerCard d-flex flex-row justify-content-center">
                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart" >Finalizar Compra</Link>
                        ) : (<ItemCount className="itemCount" initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </Card.Footer>
            </Card.Body>
        </Card >
    );
}

export default ItemDetail;