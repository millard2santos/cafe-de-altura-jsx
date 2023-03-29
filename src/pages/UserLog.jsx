import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { SubFooter } from '../components/SubFooter/SubFooter'
import { setDoc, doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../utilities'
import { CoffeContext } from '../context/ContextProvider'

export const UserLog = () => {

    const { setUser } = useContext(CoffeContext)
    const [registered, setRegistered] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!registered) {
            createUserWithEmailAndPassword(auth, e.target.user.value, e.target.password.value)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    await setDoc(doc(db, 'users', user.uid), {
                        username: e.target.user.value,
                        uid: user.uid,
                        cart: {
                            totalQuantity: 0,
                            totalPrice: 0,
                            coffees: {}
                        }
                    })
                    setUser(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        else {
            signInWithEmailAndPassword(auth, e.target.user.value, e.target.password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        navigate('/')
    }

    const handleClick = () => {
        setRegistered(prev => !prev)
    }

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser(false)
        }).catch((error) => {
        });
        navigate('/')
    }

    return (
        <>
            <NavBar />
            <div className='bg-taupe flex flex-col justify-center items-center min-h-[50vh] '>
             
                <form className='flex flex-col items-center gap-2' action="" onSubmit={handleSubmit} >
                    <label htmlFor="user">Correo electrónico:</label>
                    <input className='border rounded-md py-1 px-2' type="text" name="user" id="user" required />
                    <label htmlFor="password">Contraseña:</label>
                    <input className='border rounded-md py-1 px-2' type="password" name="password" id="password" required />
                    <input className='border p-2 rounded-lg bg-white hover:scale105 hover:bg-green transition duration-300 hover:text-white cursor-pointer' type="submit" value={'Iniciar Sesion'} />
                </form>

              
            </div>
            <Footer />
            <SubFooter />
        </>
    )
}
