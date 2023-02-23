import { useContext } from "react"
import { CoffeContext } from "../../context/ContextProvider"
import { converter } from "../../utilities"

export const CartItem = ({ item, i, last }) => {

    const { setCart } = useContext(CoffeContext)
    const sign = ','

    const handleClick = (e) => {
        if (e.target.className.includes('fa-plus')) {
            setCart(prev => {
                const holdPrev = { ...prev }
                holdPrev.totalQuantity += 1
                holdPrev.totalPrice += item.price
                holdPrev.coffees[item.id].quantity += 1
                return holdPrev
            })
        }
        else 
        {
            setCart(prev => {
                const holdPrev = { ...prev }
                holdPrev.totalQuantity -= 1
                holdPrev.totalPrice -= item.price
                holdPrev.coffees[item.id].quantity -= 1
                if (holdPrev.coffees[item.id].quantity === 0) {
                    delete holdPrev.coffees[item.id]
                }
                return holdPrev
            })
        }
    }

    return (
        <>
            <div className="flex justify-between items-center gap-6 ">
                <div className="flex gap-7">
                    <div className="flex gap-3.5 items-center">
                        <i onClick={handleClick} className="fa-solid fa-minus cursor-pointer"></i>
                        <div className="w-6 h-6 flex justify-center items-center bg-greenCounter rounded-full text-xs text-green">
                            {item.quantity}</div>
                        <i onClick={handleClick} className="fa-solid fa-plus cursor-pointer"></i>
                    </div>
                    <img src={item.img} alt="" className="w-[55px] h-[55px]" />
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="text-sm">Paquete de café, 250gr</p>
                    </div>
                </div>
                <p className="font-semibold text-lg">{converter(item.price * item.quantity,sign) }€</p>
            </div>
            {
                i < last - 1 ? <div  className={`w-full h-px bg-grey opacity-10`}></div> : ''
            }
        </>
    )
}
