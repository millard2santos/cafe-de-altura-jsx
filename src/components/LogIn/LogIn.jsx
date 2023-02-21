
import { useState, useContext } from 'react';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router'
import { setDoc, doc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../../utilities'
import { CoffeContext } from '../../context/ContextProvider'
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export const LogIn = () => {

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


        
    }

    const handleClick = () => {
        navigate('/log')
    }




    return (
        <Popup
            trigger={<button className={`py-3 font-semibold px-6 rounded text-sm bg-grey active:scale-90 hover:bg-taupe hover:text-black transition duration-100 `}> Iniciar Sesion </button>}
            modal
            nested
        >
            {close => (
                <>
                    <div className='w-screen h-screen relative flex justify-center items-center bg-[rgba(0,0,0,0.40)] '>
                        <div className='w-1/2 h-96 relative bg-green rounded-md flex flex-col justify-start p-10 text-white '>
                            <Logo />
                            <form className='flex flex-col items-center gap-3' action="" onSubmit={handleSubmit}>
                                <label htmlFor="user">Nombre de Usuario:</label>
                                <input className='text-sm text-black rounded-md py-2.5 px-2 border border-taupe' type="text" name="user" id="user" required />
                                <label htmlFor="password">Contraseña:</label>
                                <input className='text-sm text-black rounded-md py-2.5 px-2 border border-taupe' type="password" name="password" id="password" required />
                                <input className='text-sm rounded-md py-2.5 px-2 border bg-taupe text-black border-green cursor-pointer ' type="submit" value={'Iniciar Sesion'} />
                            </form>
                            <button onClick={handleClick} className=' hover:scale-110 transition-transform duration-100 mt-10'>
                                No tienes cuenta? Registrate!!
                            </button>
                            <i onClick={close} className="fa-solid fa-x text-taupe text-2xl absolute top-6 right-10 cursor-pointer p-2 hover:scale-110 transition-transform duration-100"></i>

                        </div>
                    </div>
                </>
            )}
        </Popup>
    )
}
