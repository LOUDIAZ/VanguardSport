import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import Loader from "./Loader/Loader";
import ItemsList from "./ItemList/ItemsList";
import { useParams } from "react-router-dom";
import {firestore} from "../../firebase/client";
import { collection, doc, getDocs, query, where } from "firebase/firestore";



function ItemListContainer({greeting}) {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    
    const { categoryId} = useParams();

    useEffect(() => {
        const collectionRef = categoryId
            ? query (collection(firestore,"items"), where("categoryId", "==",categoryId))
            : collection(firestore, "items")
        getDocs(collectionRef)
            .then(response => {
                const itemssAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setItems(itemssAdapted)
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

