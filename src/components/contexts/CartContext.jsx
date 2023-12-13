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

    const totalPrice = () => cartList.reduce((total, product) => total = total + (product.precio + product.cantidad), 0)

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