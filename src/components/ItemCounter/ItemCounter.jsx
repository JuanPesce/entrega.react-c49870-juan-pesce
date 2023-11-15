import { useCounter } from "../hooks/useCounter"


export const ItemCounter = ({initial=1, stock=5, onAdd}) => {
    const { counter, handleRestar, handlerSumar} = useCounter(initial, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    console.log(counter)
    return(
        <div>
            <button className='btn btn-outline-dark' onClick={handleRestar}>-</button>
            <label >{counter}</label>
            <button className='btn btn-outline-dark' onClick={handlerSumar}>+</button>
            <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
}