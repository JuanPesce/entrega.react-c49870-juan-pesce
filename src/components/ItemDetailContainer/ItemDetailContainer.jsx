import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"


export const ItemDetailBatch = () => {
    const   [product, setproduct] = useState({})
    const {pid} = useParams()
    useEffect(()=>{
        mFetch(pid)
        .then(res=> setproduct(res))
        .catch(err=> console.log('Error: ',err))
                
    }, [] )


return(
    <div className="row">
        <div className="col-12 text-center mt-5">
            <h2>Descripcion del Producto</h2>
        </div>
        <div className="col-6 text-center mt-5">
                <img src={product.imagen} alt={product.name} className="img-fluid   " />
            </div>
            <div className="col-6 mt-5">
                <h2>{product.name}</h2>
                <h4>Descripcion: {product.descripcion}</h4>
                <h4>Precio: ${product.precio}</h4>
                <h4>Stock: {product.stock}</h4>
            </div>
        
    </div>

)
}