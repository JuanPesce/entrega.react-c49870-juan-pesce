import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/Loading"


export const ItemDetailBatch = () => {
    const   [product, setproduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {pid} = useParams()
    useEffect(()=>{
        // mFetch(pid)
        // .then(res=> setproduct(res))
        // .catch(err=> console.log('Error: ',err))
        // .finally(() => setLoading(false))
        const dbFirestore = getFirestore()

        const queryDoc = doc(dbFirestore, 'products', pid)
        getDoc(queryDoc)
        .then(resultado => setproduct( {id: resultado.id, ...resultado.data()} ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

                
    }, [] )

    // const handleOnAdd = () => {
    //     onAdd(counter)
    // }


return(
    <>
    {
        loading ?
        <Loading />
            :
      
        <ItemDetail product = {product}/>
    }

    
    </>


)
}