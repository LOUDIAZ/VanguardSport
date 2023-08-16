import { useEffect, useState } from 'react';
import { getItem } from '../../../Mocks/asyncMock';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer () {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});
    const {itemId} = useParams()

    useEffect(() => {
        getItem(itemId)
        .then((result) => {
            const createdItem = new Date(result.created_item);
            setItem(...result, createdItem);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    })

    if (isLoading) return <Loader />;

    return (
        <main
            style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
            }}>
            <ItemDetail {...item} />
        </main>
    );
}
export default ItemDetailContainer;