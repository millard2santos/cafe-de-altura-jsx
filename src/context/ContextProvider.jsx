import { createContext, useEffect, useState } from "react"

export const CoffeContext = createContext()

export const ContextProvider = ({children}) => {

    const [coffees, setCoffees] = useState()
    const [cart, setCart] = useState({
      totalQuantity : 0,
      totalPrice : 0,
      coffees : {}
    })


    useEffect(() => {

        fetch('https://cafe-de-altura-api.vercel.app/api/products').then(res => res.json()).then(res=> setCoffees(res.products))



    },[])


   
  return (
    <CoffeContext.Provider value={{coffees, setCart, cart}}>
        {children}
    </CoffeContext.Provider>
  )
}
