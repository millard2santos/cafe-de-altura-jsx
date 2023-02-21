import { Logo } from '../Logo/Logo'
import { NavLinks } from '../NavLinks/NavLinks'


export const Footer = () => {
    
    return (
        <footer className="flex flex-col bg-black text-white py-7 px-10">
            <div className="footer-1 flex  items-center gap-2 mb-2.5">
                <Logo color='text-white'/>
            </div>
            {/* <div className="flex mb-4 gap-[570px]"> */}
            <div className="flex w-full ">
                <div className="w-1/2">
                    <p id="size18" className="text-lg mb-5">Te ayudamos en</p>
                    <button className="flex items-center py-4 px-6 gap-2.5 bg-grey text-white rounded border-none mb-5">
                        <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/wPhone.png?alt=media&token=9a5885b5-3bb0-4f85-a48b-8f55406656c1' alt="" />
                        +34 919 49 05 18
                    </button>
                    <button className="flex items-center py-4 px-6 gap-2.5 bg-grey text-white rounded border-none mb-5">
                        <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/whiteMail.png?alt=media&token=9d862f3d-8f0a-4399-a4ee-3b3931556fe8' alt="" id="mail-img" />
                        hola@cafedealtura.com
                    </button>
                </div>
                <div className="footer-link flex gap-[118px]  w-1/2">
                    <div className="flex flex-col items-start gap-4">
                        <NavLinks text='Tienda' url='/store' />
                        <NavLinks text='Suscripción' url='/' />
                        <NavLinks text='Para empresas' url='/' />
                        <NavLinks text='Sobre nosotros' url='/' />
                        <NavLinks text='Contacto' url='/' />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <NavLinks text='Poltica de privacidad' url='/' />
                        <NavLinks text='Politica de cookies' url='/' />
                        <NavLinks text='Términos y condiciones' url='/' />
                    </div>
                </div>
            </div>
        </footer >
    )
}
