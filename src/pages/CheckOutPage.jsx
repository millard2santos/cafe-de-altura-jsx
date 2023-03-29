import { NavBar } from '../components/NavBar/NavBar'
import { Payment } from "../components/Payment/Payment"
import { Bill } from "../components/Bill/Bill"

const CheckOutPage = () => {


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