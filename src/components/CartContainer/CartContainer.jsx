import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../contexts/CartContext"

export const CartContainer = () =>{

    const {cartList, vaciarCarrito} = useCartContext()

    const handleOrder = () => {
        const order = {}
        order.buyer = {name: "juan", phone: "12345678", email: "juan@juan.com"}
        order.item = cartList.map (({id, name, price}) => ({id, name, price}))
        order.total = totalPrice()
        console.log(order)

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    return(
        <div>
            {cartList.map(product => <div key={product.id}>
                                            <img className="w-25" src={product.imagen}/>
                                            Cantidad: {product.cantidad} - Precio: ${product.precio} - Subtotal: ${product.precio * product.cantidad}
                                            <button className="btn btn-danger"> X </button>
                                        </div>
                )}
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar!</button>
            <button className="btn btn-danger" onClick={handleOrder}>Terminar Compra</button>
        </div>
    )
}