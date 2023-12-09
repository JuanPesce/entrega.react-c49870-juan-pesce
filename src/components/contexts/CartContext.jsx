import { createContext } from "react";

export const cartContext = createContext([])

export const cartContextProvider = ({ children }) =>{
    return(
        <cartContext.Provider value={{
            
        }}>

        {children}

        </cartContext.Provider>
    )
    
}