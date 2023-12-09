import { ItemCounter } from "../../ItemCounter/ItemCounter"


export const ItemDetail =({imagen, name, descripcion,precio,stock}) =>{
    const onAdd = (cantidad) => {
        console.log(cantidad)
      }
    return(
    <div className="row">
    <div className="col-12 text-center mt-5">
        <h2>Descripcion del Producto</h2>
    </div>
    <div className="col-6 text-center mt-5">
            <img src={imagen} alt={name} className="img-fluid   " />
        </div>
        <div className="col-6 mt-5">
            <h2>{name}</h2>
            <h4>Descripcion: {descripcion}</h4>
            <h4>Precio: ${precio}</h4>
            <h4>Stock: {stock}</h4>
            <ItemCounter onAdd={onAdd} initial={1} stock={10} />
        </div>
    
</div>
    )
}