import { useContext } from "react"
import { CoffeContext } from "../../context/ContextProvider"
import { CoffeCard } from "../CoffeCard/CoffeCard"

export const CoffeList = ({ quantity }) => {

    const { coffees } = useContext(CoffeContext)
    
    const holdCoffees = []
    for (let i = 0; i < quantity; i++) {
        if(coffees){
            holdCoffees.push(coffees[i])
        }
    }

    return (
        <>
            {
                holdCoffees.map(coffe => <CoffeCard key={coffe._id} id={coffe._id} name={coffe.brand} img={coffe.img_url} price={coffe.price} available={coffe.available}/>)
            }
        </>
    )
}
