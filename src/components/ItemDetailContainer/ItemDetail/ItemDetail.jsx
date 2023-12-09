

import { useCartContext } from "../../contexts/CartContext"
import { ItemCounter } from "../../ItemCounter/ItemCounter"

export const ItemDetail =({ product }) =>{

    const {addProduct } = useCartContext ( CartContext )


    const onAdd = (cantidad) => {
        addProduct( { ...product, cantidad})
      }
        
      return(
    <div className="row">
    <div className="col-12 text-center mt-5">
        <h2>Descripcion del Producto</h2>
    </div>
    <div className="col-6 text-center mt-5">
            <img src={product.imagen} alt={'image'} className="img-fluid   " />
        </div>
        <div className="col-6 mt-5">
            <h2>{product.name}</h2>
            <h4>Descripcion: {product.descripcion}</h4>
            <h4>Precio: ${product.precio}</h4>
            <h4>Stock: {product.stock}</h4>
            <ItemCounter onAdd={onAdd} initial={1} stock={10} />
        </div>
    
</div>
    )
}