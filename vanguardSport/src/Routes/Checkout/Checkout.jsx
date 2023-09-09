/*import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, documentId, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/client";

const {cart, total, clearCart} = useContext(CartContext)

const createOrder = async ({name, phone, email}) => {
    try {
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items:cart,
            total: total,
            date:Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(firestore)

        const outOfStock =[]

        const ids = cart.map(items => items.id)

        const itemsRef = collection(firestore,"items")
    
        const itemsAddedFromFirestore = await getDocs(query(itemsRef, where(documentId(), "in", )))
    }
}  */