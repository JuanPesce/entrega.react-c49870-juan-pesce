import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    const { counter, handlerRestar, handlerSumar} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)

    }

    return(
        <div>
            <button className='btn btn-outline-dark' onClick={handlerRestar}>-</button>
            <label > { counter } </label>
            <button className='btn btn-outline-dark' onClick={handlerSumar}>+</button>
            <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
}