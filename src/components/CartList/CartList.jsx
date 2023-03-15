import { useContext, useState } from "react"
import { CoffeContext } from "../../context/ContextProvider"
import { Bill } from "../Bill/Bill"
import { CartItem } from "../CartItem/CartItem"
import { DeliveryCard } from "../DeliveryCard/DeliveryCard"

export const CartList = () => {

  const { cart } = useContext(CoffeContext)
  const [freeDelivery, setFreeDelivery] = useState(false)

  return (
    <section className="px-12 flex flex-col gap-8 min-h-[90vh] mb-40">
      <h2 className="text-center text-green font-medium text-2xl mt-10">{cart.totalQuantity === 0 ? 'Cesta' : `Cesta(${cart.totalQuantity})`}</h2>
      <div className="flex justify-between">
        <div className="flex flex-col w-full px-6">
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">Productos</p>
            <div className="flex flex-col gap-6" id="container">
              {
                cart.totalQuantity === 0 ? <div className="self-center" id="empty">
                  <p>No tienes productos en tu cesta</p>
                </div> : ''
              }
              {
                Object.values(cart.coffees).map((item, i) => <CartItem key={i} item={item} i={i} last={Object.values(cart.coffees).length} />)
              }
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-6" id="envioDiv">
            <p className="font-semibold text-lg">Seleccionar envio</p>
            <DeliveryCard free={true} setFreeDelivery={setFreeDelivery} text0='Envio 5-7 dias' text1='Opción estándar sin seguimiento' />
            <div className="w-full h-px bg-grey opacity-10"></div>
            <DeliveryCard free={false} setFreeDelivery={setFreeDelivery} text0='Envío urgente 24h' text1='Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).' />
          </div>
        </div>
        <Bill freeDelivery={freeDelivery} />
      </div>
    </section>
  )
}
