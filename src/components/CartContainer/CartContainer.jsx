import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../contexts/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

export const CartContainer = () =>{

    const [formData, setFormData] =  useState({
        name: '',
        phone: '',
        email: ''
    })

    const [isID, setIsID] = useState('')
    const {cartList, vaciarCarrito, totalPrecio, removeProduct} = useCartContext()

    const handleOrder = async(evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.item = cartList.map (({id, name, precio}) => ({id, name, precio}))
        order.total = totalPrecio()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Error! Favor de ingresar un mail valido!');
            return;}
        
        if (!formData.name || !formData.phone || !formData.email || !formData.repetirEmail) {
                alert('Error! Favor de completar los campos para efectuar la compra');
                return;
            }

        if (formData.email !== formData.repetirEmail) {
                alert('Error! El Email no coincide!');
                return;
            }

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setIsID(resp.id))
        .catch(err => console.log(err))
        .finally(()=>{

            setFormData({ 
                name: '',
                phone: '',
                email: '',
                repetirEmail: ''
            }),
            vaciarCarrito()
        }
        )
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    return(
        <div>
            {isID !== '' && <>
            <label>Felicitaciones! La orden de compra es: {isID}</label>
            </>}
            {cartList.map(product => <div key={product.id}>
                                            <img className="w-25" src={product.imagen}/>
                                            Cantidad: {product.cantidad} - Precio: ${product.precio} - Subtotal: ${product.precio * product.cantidad}
                                            <button className="btn btn-danger" onClick={() => removeProduct(product.id)} > X </button>
                                        </div>
                )}
                {
                    totalPrecio() ===0 ?
                    <div> 
                        El Carrito esta vacio
                        <Link to={'/'}> Volver al menu principal </Link>
                    </div>
                    :
                
                <>
                <label>
                    { totalPrecio() !== 0 && <label>Precio total: ${totalPrecio()} </label>}
                </label><br />
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
                    /><br /><label> Repetir Email</label><br />
                <input 
                    type="text"
                    name="repetirEmail"
                    value={formData.repetirEmail} 
                    onChange={ handleOnChange } 
                    /><br /><br />   
            </form>
        
            <button className="btn btn-danger" onClick={handleOrder}>Terminar Compra</button>
            </>
    }
        </div>
    )
}
    