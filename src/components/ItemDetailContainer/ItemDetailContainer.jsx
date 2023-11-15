import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetailBatch = () => {
    const   [product, setproduct] = useState({})
    const {pid} = useParams()
    useEffect(()=>{
        mFetch(pid)
        .then(res=> setproduct(res))
        .catch(err=> console.log('Error: ',err))
                
    }, [] )

    const onAdd = (cantidad) => {
        console.log(`la cantidad seleccionada es: ${cantidad}`)
    }


return(
    <ItemDetail {...product}/>

)
}