import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../helpers/mFetch"
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from "firebase/firestore"
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
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {cid} = useParams()

//   useEffect(()=>{
//     if (cid) {
//         mFetch()
//         .then(  result => setProductos(result.filter(product => product.categoria === cid)))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))
//     } else {
//         mFetch()
//         .then(  result => setProductos(result))
//         .catch(err => console.log(err))  
//         .finally(() => setLoading(false))          
//     }
// }, [cid])
  
useEffect( ()=>{
  const dbFirestore = getFirestore()

  const queryCollection = collection(dbFirestore, 'products')

  if (cid) {
    const queryFilter = query(
      queryCollection,
      where('categoria', '==', cid)
      )
      getDocs(queryFilter)
      .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  } else {
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map( producto => ( { id: producto.id, ...producto.data() }))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }




}, [cid])

console.log(productos)




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

