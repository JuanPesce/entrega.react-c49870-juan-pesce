

import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"
import { useState } from "react"

export const ItemDetail =({ product }) =>{
    const [isCounter, setIsCounter] = useState(true)

    const {addProduct } = useCartContext ()


    const onAdd = (cantidad) => {
        addProduct( { ...product, cantidad})
        setIsCounter(false)
      }
        
      return(
    <div className="row">
    <div className="col-12 text-center mt-5">
        <h2>Descripcion del Producto</h2>
    </div>
    <div className="col-6 text-center mt-5">
            <img src={product.imagen} alt={'imagen'} className="img-fluid   " />
        </div>
        <div className="col-6 mt-5">
            <h2>{product.name}</h2>
            <h4>Descripcion: {product.descripcion}</h4>
            <h4>Precio: ${product.precio}</h4>
            <h4>Stock: {product.stock}</h4>
            {
                isCounter ?
                <ItemCounter onAdd={onAdd} initial={1} stock={10} />
                :
                <>
                    <Link className="btn btn-outline-dark" to='/cart'>Terminar compra</Link>
                    <Link className="btn btn-outline-dark" to='/'>Seguir comprando</Link>

                </>
            }
            
        </div>
    
</div>
    )
}