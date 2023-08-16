import { Link } from "react-router-dom";
import Items from "../Items/Items";


function ItemsList({ itemsList = [] }) {
    return (
        <section
            style={{
                display: "flex",
                padding:"2rem",
                flexDirection: "initial",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
            }}
        >
            {itemsList.map((item) => {
                const createdItem = new Date(item.created);
                return (
                        <Link style={{textDecoration: "none"}} key={item.id} to={`/item/${item.id}`}>
                        <Items
                            img={item.img}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            price={item.price}
                        /></Link>
                );
            })}
        </section>
    );
}

export default ItemsList;
