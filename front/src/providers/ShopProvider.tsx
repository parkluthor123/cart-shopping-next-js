import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { api } from "../services/api";

type CartType = {
    products: any,
}

export const CartContext = createContext({} as CartType);

export default function CartProvider({children}: PropsWithChildren<{}>) {
    const [products, setProducts] = useState<object>({})

    const getProducts = async () => {
        await api.get('/products')
        .then((response) => {
            setProducts(response.data)
        })
    }

    useEffect(()=>{
        getProducts();
    },[])
    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    )
}