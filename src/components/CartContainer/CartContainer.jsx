import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../contexts/CartContext"
import { useState } from "react"

export const CartContainer = () =>{

    const [formData, setFormData] =  useState({
        name: '',
        phone: '',
        email: ''
    })

    const {cartList, vaciarCarrito, totalPrecio, removeProduct} = useCartContext()

    const handleOrder = () => {
        const order = {}
        order.buyer = {name: "juan", phone: "12345678", email: "juan@juan.com"}
        order.item = cartList.map (({id, name, precio}) => ({id, name, precio}))
        order.total = totalPrecio()
        console.log(order)

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return(
        <div>
            {cartList.map(product => <div key={product.id}>
                                            <img className="w-25" src={product.imagen}/>
                                            Cantidad: {product.cantidad} - Precio: ${product.precio} - Subtotal: ${product.precio * product.cantidad}
                                            <button className="btn btn-danger" onClick={() => removeProduct(product.id)} > X </button>
                                        </div>
                )}
                <div>
                    { totalPrecio() !== 0 && <label>Precio total: ${totalPrecio()} </label>}
                </div>
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar!</button>
                
            <form onSubmit={handleOrder}>
                <label> Ingresar Nombre</label><br />
                <input 
                    type="text"
                    name="name"
                    value={formData.name} 
                    onChange={ handleOnChange }
                /><br /><label> Ingresar Telefono</label><br />
                <input 
                    type="text"
                    name="phone"
                    value={formData.phone} 
                    onChange={ handleOnChange } 
                /><br /><label> Ingresar Email</label><br />
                <input 
                    type="text"
                    name="email"
                    value={formData.email} 
                    onChange={ handleOnChange } 
                />
            </form>
        
            <button className="btn btn-danger" onClick={handleOrder}>Terminar Compra</button>
        </div>
    )
}