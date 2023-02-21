import { Link } from 'react-router-dom'
import { NavLinks } from '../NavLinks/NavLinks'
import { Logo } from '../Logo/Logo'
import { useContext } from 'react'
import { CoffeContext } from '../../context/ContextProvider'
import { auth } from '../../utilities'
import { signOut } from 'firebase/auth'
import { LogIn } from '../LogIn/LogIn'

export const NavBar = () => {

    const {cart, user, setUser} = useContext(CoffeContext)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser(false)
        }).catch((error) => {
        });
    }

    return (
        <nav className="flex justify-between items-center bg-darkGrey py-3 px-10 text-white">
            <Logo />
            <div className="nav-link flex justify-between gap-8">
                <NavLinks url='/store' text='Tienda' />
                <NavLinks url='/' text='Suscripción' />
                <NavLinks url='/' text='Para empresas' />
                <NavLinks url='/' text='Sobre nosotros' />
                <NavLinks url='/' text='Contacto' />
            </div>
            <div className="flex justify-evenly items-center gap-6">
                <div className="flex justify-evenly items-center gap-3">
                    {
                    
                    !user ? <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/wPhone.png?alt=media&token=9a5885b5-3bb0-4f85-a48b-8f55406656c1' alt="white phone" className="w-4.5 h-4.5" /> : ''
                    }
                    {user ? <p className='font-semibold'>Hola, {user.email.slice(0,user.email.indexOf('@'))}</p> : <Link to=''><p className='text-sm'>+34 919 49 05 18</p></Link>}
                </div>
                {user ?<button onClick={handleLogOut} className={`py-3 font-semibold px-6 rounded bg-grey shadow-normal text-sm active:scale-90 hover:bg-taupe hover:text-black transition duration-100 `}>Log Out</button>
                  : <LogIn />}
                    {/* <LinkButton bgColor='bg-grey' text="Iniciar sesión" url='/log'/> */}
            </div>
            <Link to="/cart">
                <div className="flex items-center gap-2">
                    <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/bolsa.png?alt=media&token=5d53b6ff-2890-4370-a3fe-9247d134aac1' alt="" className="w-6 h-6" />
                    <div id="counterTop"
                        className={`${cart.totalQuantity === 0 ? 'hidden' : ''} w-6 h-6 rounded-full justify-center flex items-center bg-grey text-xs`}>{cart.totalQuantity}</div>
                </div>
            </Link>
        </nav>
    )
}
