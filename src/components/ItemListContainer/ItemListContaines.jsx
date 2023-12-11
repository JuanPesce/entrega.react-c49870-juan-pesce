import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"

const Loading = () =>{

  useEffect(()=>{
    return () => {}
  })

  return(
    <h2>Cargando...</h2>
  )
}


export const ItemListContaines = ({greeting}) => {
  const [ productos, setProductos ] = useState([])
  const [loading, setLoading] = useState(true)

  const {cid} = useParams()

  useEffect(()=>{
    if (cid) {
        mFetch()
        .then(  result => setProductos(result.filter(product => product.categoria === cid)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
        mFetch()
        .then(  result => setProductos(result))
        .catch(err => console.log(err))  
        .finally(() => setLoading(false))          
    }
}, [cid])
  
  return (
    <>
      <h2 className="text-center">{ greeting }</h2>
      {
          loading ?
            <Loading />
          :

          <ItemList productos={productos} />
        
        }
     </>
  )
}

