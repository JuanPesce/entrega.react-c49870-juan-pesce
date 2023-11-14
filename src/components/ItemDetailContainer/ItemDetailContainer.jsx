import { useEffect, useState } from "react"
import { sFetch } from "../../helpers/mFetch"


export const ItemDetailBatch = () => {
    const   [product, setproduct] = useState({})
    useEffect(()=>{
        sFetch('1')
        .then(res=> setproduct(res))
        .catch(err=> console.log('Error: ',err))
                
    }, [] )


return(
    <div>
        <div>
            <h1>Descripcion del Producto</h1>
        </div>
        <div>
            <img src={product.imagen} alt={product.name} className="img-fluid" />
            <h2>{product.name}</h2>
        </div>
        <div>
            <h4>Descripcion: {product.descripcion}</h4>
            <h4>Precio: ${product.precio}</h4>
            <h4>Stock: {product.stock}</h4>

        </div>
    </div>

)
}