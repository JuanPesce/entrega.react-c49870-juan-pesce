import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetailBatch = () => {
    const   [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {pid} = useParams()
    useEffect(()=>{
        mFetch(pid)
        .then(res=> setproduct(res))
        .catch(err=> console.log('Error: ',err))
        .finally(() => setLoading(false))

                
    }, [] )

    const handleOnAdd = () => {
        onAdd(counter)
    }


return(
    <>
    {
        loading ?
        <h2>Cargando...</h2>
            :
      
        <ItemDetail product = {product}/>
    }

    
    </>


)
}