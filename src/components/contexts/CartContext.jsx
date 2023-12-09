import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) =>{
    const [cartList, setCartList] = useState([])    
    
    const addProduct = (product) => {
            setCartList([
                ...cartList,
                product]
                )
        
    }
    
    const vaciarCarrito = () => {
        setCartList([])
    }


    return(
        <CartContext.Provider value = {{
            cartList,
            addProduct,
            vaciarCarrito
        }}>

            {children}

        </CartContext.Provider>
        
        )
}