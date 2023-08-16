import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import Loader from "./Loader/Loader";
import ItemsList from "./ItemList/ItemsList";
import { getItems} from "../../Mocks/asyncMock";


function ItemListContainer({greeting}) {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        getItems()
            .then((response) => {
                setItems(response);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    })

    if (isLoading) return <Loader />;

    return (
        <main>
            <div><h1>{greeting}</h1></div>
            <ItemsList itemsList={items} />
        </main>
    );
}
export default ItemListContainer;

