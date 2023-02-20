import { useContext } from 'react'
import { CoffeContext } from '../../context/ContextProvider'

export const Bill = ({free}) => {

    const {cart} = useContext(CoffeContext)
    
    return (
        <div className=" bg-offWhite flex flex-col gap-4 p-6 self-start">
            <p className="text-lg font-semibold">Total del carrito</p>
            <div className="w-full h-px bg-grey opacity-10"></div>
            <div className="flex justify-between items-center">
                <p className="text-sm">SUBTOTAL</p>
                <p className="text-sm font-semibold" >{cart.totalPrice}€</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm">ENVÍO</p>
                <p className="text-sm font-semibold" id="envio">{free ? '0,00€' : '9,00€'}</p>
            </div>
            <div className="w-[336px] h-px bg-grey opacity-10"></div>
            <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">TOTAL</p>
                <p className="text-sm font-semibold" >{free ? cart.totalPrice : cart.totalPrice + 9}€</p>
            </div>
            <p className="self-end text-xs text-grey">Incluye {Number(cart.totalPrice * 0.21).toFixed(2)}€ de IVA</p>
            <div className="flex justify-center items-center gap-10">
                <button className=" bg-green text-white py-3 px-6 rounded text-sm font-semibold ">Ir a checkout</button>
                <a href="store.html" className="text-green font-semibold text-sm ">Seguir comprando</a>
            </div>
        </div>
    )
}
