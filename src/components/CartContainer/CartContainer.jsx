import { useCartContext } from "../contexts/CartContext"

export const CartContainer = () =>{

    const {cartList, vaciarCarrito} = useCartContext()

    return(
        <div>
            {cartList.map(product => <div key={product.id}>
                                            <img className="w-25" src={product.imagen}/>
                                            Cantidad: {product.cantidad} - Precio: ${product.precio} - Subtotal: ${product.precio * product.cantidad}
                                            <button className="btn btn-danger"> X </button>
                                        </div>
                )}
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar!</button>
        </div>
    )
}