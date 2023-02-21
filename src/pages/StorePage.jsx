import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/NavBar/NavBar"
import { StoreSec } from "../components/StoreSec/StoreSec"
import { SubFooter } from "../components/SubFooter/SubFooter"
import { ThreeCardsSec } from "../components/ThreeCardsSec/ThreeCardsSec"

const StorePage = () => {
    
    return (
        <>
        <NavBar />
        <StoreSec />
        <ThreeCardsSec />
        <Footer />
        <SubFooter />
        </>
    )
}

export default StorePage