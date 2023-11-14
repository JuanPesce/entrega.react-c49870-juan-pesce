import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"


export const ItemListContaines = ({greeting}) => {
  const [ productos, setProductos ] = useState([])
  // llamada a mi promesa mock de una  api
  useEffect(()=>{
      mFetch()
      .then( result => setProductos(result))
      .catch(err => console.log(err))
  }, [])
  
  
  return (
    <div>
      <h2 className="text-center">{ greeting }</h2>
      <div style={
        {
           display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap:'10px',
          justifyContent: 'center'
        }
      }>
            { productos.map(product =>  <div key={product.id} className='card w-25'>
                                            <div className='card-body p-0 text-center'>
                                                <img src={product.imagen} className='w-100' alt='imagen'/>
                                                <h6>{product.name}</h6>
                                                <p>Precio: ${product.precio}</p>
                                                <p>Stock: {product.stock}</p>
                                            </div>
                                            <div className='card-footer'>
                                                <button className='btn btn-outline-dark w-100'>Detalle</button>
                                            </div>
                                        </div>
            )}
      </div>      
    </div>
  )
}

