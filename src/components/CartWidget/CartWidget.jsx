import { useCartContext } from "../contexts/CartContext"

export function CartWidget() {
  const {totalCantidad} = useCartContext()
  
  return (
      <div className="text-dark">
          {totalCantidad() !== 0 && totalCantidad()} 🛒
      </div>
    )
  }
  
  