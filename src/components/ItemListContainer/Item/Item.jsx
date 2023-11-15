import { Link } from "react-router-dom"

export const Item =({imagen, name, id,precio,stock})=>{

    return(
            <div key={id} className='card w-25'>
                  <div className='card-body p-0 text-center'>
                         <img src={imagen} className='w-100' alt='imagen'/>
                      <h6>{name}</h6>
                      <p>Precio: ${precio}</p>
                      <p>Stock: {stock}</p>
                  </div>
                  <div className='card-footer'>
                    <Link to={`/detalle/${id}`}>
                      <button className='btn btn-outline-dark w-100'>Detalle</button>
                    </Link>
                  </div>
              </div>
          )
        } 
