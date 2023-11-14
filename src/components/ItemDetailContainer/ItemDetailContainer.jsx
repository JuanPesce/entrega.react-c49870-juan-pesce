import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"


export const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})

     useEffect( ()=> {
        mFetch('1')
            .then(res => setproduct(res))
            .catch(err => console.log('Error: ',err))
        }, [] )
        
        console.log(product)

    
     return (
        <div className="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle de Producto</h1>
            </div>
            <div className="col-12 text-center mt-5">
                <h2>{product.name}</h2>    
            </div>
        </div>
     )

}