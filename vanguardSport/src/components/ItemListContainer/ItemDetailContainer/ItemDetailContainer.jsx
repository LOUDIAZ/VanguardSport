import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase/client';

function ItemDetailContainer () {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});
    const {itemId} = useParams()

    useEffect(() => {
        const docRef = doc (firestore,"items", itemId)
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const itemAdapted = {id: response.id, ...data}
                setItem(itemAdapted)
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    }, [itemId])

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