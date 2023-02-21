import { createContext, useEffect, useState } from "react"
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../utilities"

export const CoffeContext = createContext()

export const ContextProvider = ({ children }) => {

  const [coffees, setCoffees] = useState()
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({
    totalQuantity: 0,
    totalPrice: 0,
    coffees: {}
  })
  
  useEffect(() => {

    fetch('https://cafe-de-altura-api.vercel.app/api/products').then(res => res.json()).then((res) => setCoffees(res.products))

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('conectado')
        await getDoc(doc(db,'users', user.uid)).then(res => res.data()).then(res => setCart(res.cart))
        setUser(user)
      } 
      else 
      {
        console.log('No conectado')
        setCart({
          totalQuantity: 0,
          totalPrice: 0,
          coffees: {}
        })
      }
    });
  }, [])

  return (
    <CoffeContext.Provider value={{ coffees, setCart, cart, setUser, user }}>
      {children}
    </CoffeContext.Provider>
  )
}
