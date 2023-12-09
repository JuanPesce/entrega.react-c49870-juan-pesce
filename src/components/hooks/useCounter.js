import { useState } from "react"



export const useCounter =(min, max) => {
    const [counter, setCounter] = useState(min)

        const handlerSumar = () => {
            if (counter < max) {
                setCounter(counter + 1)
            }
        }
        const handlerRestar = () => {
            if (counter > min ) {
                setCounter(counter - 1)
            }
        }
 
        return {counter, handlerSumar, handlerRestar}
}