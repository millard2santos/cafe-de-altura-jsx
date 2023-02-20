
import { db } from "../utilities"
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore'
import { useContext, useEffect } from "react"
import { CoffeContext } from "../context/ContextProvider"


const CheckOutPage = () => {


    const { cart, user } = useContext(CoffeContext)
    console.log(user)

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

    return <p>hola</p>
}

export default CheckOutPage