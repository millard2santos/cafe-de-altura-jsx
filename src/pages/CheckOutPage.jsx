
import { db } from "../utilities"
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore'
import { useContext, useEffect } from "react"
import { CoffeContext } from "../context/ContextProvider"
import { NavBar } from '../components/NavBar/NavBar'
import { Payment } from "../components/Payment/Payment"
import { Bill } from "../components/Bill/Bill"

const CheckOutPage = () => {

    const { cart, user } = useContext(CoffeContext)

    const setData = async () => {
        try {
            if (user) {
                await setDoc(doc(db, 'users', user.uid), {
                    username: user.email,
                    uid: user.uid,
                    'cart': { ...cart }
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setData();
    }, [])

    return (
        <>
            <NavBar />
            <div className="py-10 px-12">
                <h2 className="text-center text-green font-medium text-2xl">Checkout</h2>
                <div className="flex justify-between">
                    <Payment />
                    <Bill />
                </div>
            </div>

        </>
    )
}

export default CheckOutPage