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
                    // ...
                    setUser(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, e.target.user.value, e.target.password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
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
            // Sign-out successful.
            setUser(false)
        }).catch((error) => {
            // An error happened.
        });
        navigate('/')

    }

    return (
        <>
            <NavBar />
            <p>{registered ? 'Iniciar sesion' : 'Crear cuenta'}</p>
            <form className='min-h-[50vh]' action="" onSubmit={handleSubmit}>
                <label htmlFor="user">Nombre de Usuario:</label>
                <input className='border' type="text" name="user" id="user" required />
                <label htmlFor="password">Contraseña:</label>
                <input className='border' type="password" name="password" id="password" required />
                <input className='border' type="submit" value={'Iniciar Sesion'} />
            </form>
            <button className='hover:scale-110 transition-transform duration-100' onClick={handleClick}>
                {registered ? 'No tienes cuenta? Registrate!!' : 'Ya tienes cuenta? Compra!!'}
            </button>
            <button onClick={handleLogOut} className='hover:scale-110 transition-transform duration-100'>Desconectarse</button>
            <Footer />
            <SubFooter />
        </>
    )
}
