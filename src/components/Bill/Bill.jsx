import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { CoffeContext } from '../../context/ContextProvider'
import { converter } from '../../utilities'
import { LinkButton } from '../LinkButton/LinkButton'

export const Bill = ({freeDelivery}) => {

    const {cart} = useContext(CoffeContext)
    const { pay } = useParams();
    const sign = ','
    console.log(freeDelivery)
    return (
        <div className=" bg-offWhite flex flex-col gap-4 p-6 self-start">
            <p className="text-lg font-semibold">Total del carrito</p>
            <div className="w-full h-px bg-grey opacity-10"></div>
            <div className="flex justify-between items-center">
                <p className="text-sm">SUBTOTAL</p>
                <p className="text-sm font-semibold" >{converter(cart.totalPrice,sign)}€</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-sm">ENVÍO</p>
                <p className="text-sm font-semibold" id="envio">{freeDelivery ? `${converter(0,sign)}€` : `${converter(9,sign)}€`}</p>
            </div>
            <div className="w-[336px] h-px bg-grey opacity-10"></div>
            <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">TOTAL</p>
                <p className="text-sm font-semibold" >{freeDelivery ? converter(cart.totalPrice,sign) : converter(cart.totalPrice + 9,sign)}€</p>
            </div>
            <p className="self-end text-xs text-grey">Incluye {converter(cart.totalPrice * 0.21, sign)}€ de IVA</p>
            <div className={`flex ${pay === '1' ? 'justify-start' : 'justify-center'} items-center gap-10`}>
                {
                    pay === '9' ? <LinkButton bgColor='bg-green' text='Pagar y realizar pedido' url='/success' noShadow={true} /> 
                    : cart.totalQuantity === 0 ? <LinkButton bgColor='bg-green' text='Ir a checkout' url={`/checkout/${freeDelivery}`} noShadow={true} disable={true}/> 
                    : <LinkButton bgColor='bg-green' text='Ir a checkout' url={`/checkout/${freeDelivery}`} noShadow={true} /> 
                }
                {
                    pay === '9' ? '' : <LinkButton bgColor='bg-transparent' text='Seguir comprando' url='/store' noShadow={true} />
                }
            </div>
        </div>
    )
}
