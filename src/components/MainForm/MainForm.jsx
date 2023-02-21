export const MainForm = () => {
    return (
        <section className="form bg-taupe px-10">
            <div className="hold-form flex justify-center gap-6">
                <article className="form-txt flex flex-col justify-center items-start gap-5 text-grey ">
                    <h4 className="text-black text-lg font-semibold">Entra en contacto con nosotros</h4>
                    <p >Si tienes dudas, ponte en contacto con nostros a través del formulario y te responderemos lo
                        antes
                        posible</p>
                    <p className="mt-5 mb-3 ">También puedes ponerte en contacto con nosotros en nuestra dirección o a través del
                        teléfono de la
                        tienda</p>
                    <div className="form-txt-address flex flex-col gap-0 mb-2">
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield,OR 12345</p>
                    </div>
                    <div className="form-txt-tlf flex gap-4">
                        <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/greyPhone.png?alt=media&token=7ae118fc-09d8-4d8f-906f-14ae51cacc3e' alt="" />
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="form-txt-mail flex gap-4">
                        <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/greyMail.png?alt=media&token=c531fc6e-fa12-402b-8275-362297fef4bc' alt="" />
                        <p>support@example.com</p>
                    </div>
                    <div className="form-txt-last mt-5 flex gap-1.5">
                        <p>¿Buscas un trabajo?</p>
                        <p className="text-black font-semibold underline">Ver nuestras ofertas</p>
                    </div>
                </article>
                <article className="py-8 pl-16 pr-[51px] bg-white">
                    <form action="" className="flex flex-col gap-6">
                        <div className="form-actual-name flex flex-col gap-1">
                            <label className="text-xs text-grey" htmlFor="name">Nombre completo</label>
                            <input type="text" id="name" name="name"
                                className="w-[470px] py-2 px-4 shadow-sm rounded-md border border-taupe hover:border-greyHoverInput focus:outline-greenFocusInput"
                                required />
                        </div>
                        <div className="form-actual-email flex flex-col gap-1">
                            <label className="text-xs text-grey" htmlFor="mail">Email</label>
                            <input type="email" id="mail" name="e-mail"
                                className="w-[470px] py-2 px-4 shadow-sm rounded-md border border-taupe hover:border-greyHoverInput focus:outline-greenFocusInput"
                                required />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <label className="text-xs text-grey" htmlFor="tlf">Teléfono</label>
                            <div className="flex border border-taupe shadow-sm rounded-md hover:border-greyHoverInput focusPoint outline outline-1 outline-white ">

                                <select name="" id="select" className="text-sm px-2 rounded-md py-3 cursor-pointer focus:outline-none">
                                    <option value="">US</option>
                                    <option value="">ES</option>
                                    <option value="">FR</option>
                                </select>
                                <input className="outline-none border-none w-full rounded-md" type="tel" id="tlf" name="Phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+1 (555) 987-6543" />
                            </div>
                        </div>
                        <textarea
                            className="focus:outline-greenFocusInput py-2 px-4 shadow-sm rounded-md border border-taupe hover:border-greyHoverInput"
                            name="comment" id="comment" rows={6} placeholder="¿En qué puedo ayudarte?"></textarea>
                        <div className="flex items-center gap-3" id="form-check">
                            <input type="checkbox" name="Accept" id="condition"
                                className="accent-green outline-none py-2 px-4 shadow-sm rounded-md border border-taupe"
                                required />
                            <label className="text-sm text-grey" htmlFor="condition">Acepto la <span className="condition-span">Política
                                de Privacidad</span>
                                y los <span className="condition-span underline font-semibold">Términos y
                                    condiciones.</span></label>
                        </div>
                        <input className="bg-green py-3 px-6 rounded w-[90px] text-white border-none text-sm font-semibold"
                            type="submit" name="" id="" value="Enviar" />
                    </form>
                </article>
            </div>
        </section>
    )
}
