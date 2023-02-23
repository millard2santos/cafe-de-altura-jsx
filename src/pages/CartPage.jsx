import { CartList } from "../components/CartList/CartList"
import { NavBar } from "../components/NavBar/NavBar"
import { SubFooter } from "../components/SubFooter/SubFooter"
import { db } from "../utilities"
import { setDoc, doc } from 'firebase/firestore'
import { useContext, useEffect } from "react"
import { CoffeContext } from "../context/ContextProvider"


const CartPage = () => {


    return (
        <>
            <NavBar />
            <CartList />
            <SubFooter />
        </>
    )
}

export default CartPage