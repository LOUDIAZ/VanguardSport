import "../Items/Items.css";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";

function ItemDetail ({id, img, title, description, category, price }) {
    return (
        <Card style={{ width: '18rem' }} data-id={id}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Footer className="footer">
                    <Button className="btn">SHOP NOW</Button>
                    <Card.Text className="price">${price}</Card.Text>
                </Card.Footer>
            </Card.Body>
        </Card >
    );
}

export default ItemDetail;