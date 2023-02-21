import { InputComponent } from '../InputComponent/InputComponent'
import { PaymentType } from '../PaymentType/PaymentType'

export const Payment = () => {

    return (
        <div className='flex flex-col gap-2'>
            <form className='flex flex-col gap-2'>
                <h3 className="font-semibold text-lg ">Seleccionar método de pago</h3>
                <PaymentType text0={'Tarjeta de débito'} text1={'Opción estándar sin seguimiento'} id={'debitCard'}/>
                <InputComponent type={'text'} text={'Titular'} id={'name'} placeholder={'Nombre del titular'} />
                <InputComponent type={'number'} text={'Número de la tarjeta'} id={'cardNumber'} placeholder={'1234 1234 1234 1234'} />
                <div className='flex gap-6'>
                    <InputComponent type={'month'} text={'Fecha de caducidad'} id={'expiration'} placeholder={'MM / YY'} />
                    <InputComponent type={'number'} text={'CVC'} id={'cvc'} placeholder={'123'} />
                </div>
                <div className="w-full h-px bg-grey opacity-10"></div>
                <PaymentType id={'bankAccount'} text0={'Transferencia bancaria a la cuenta ES12 1234 1234 123457890'} text1={'Será necesario recibir el comprobante de la transferencia para preparar tu pedido'} />
                <div className="w-full h-px bg-grey opacity-10"></div>
                <PaymentType text0={'Bizum '} id={'bizum'} />
            </form>
            <form className='flex flex-col gap-2' action="">
                <h3 className="font-semibold text-lg ">Direcció de envío</h3>
                <InputComponent type={'text'} text={'Nombre'} id={'name'} />
                <InputComponent type={'text'} text={'Apellidos'} id={'lastName'} />
                <InputComponent type={'tel'} text={'Teléfono'} id={'phone'} placeholder={'+34 600 6000 600'} />
                <InputComponent type={'email'} text={'Email'} id={'email'} />
                <div className='flex flex-col'>
                    <label className='text-sm' htmlFor="country">País</label>
                    <select className='py-2.5 px-2 text-xs border border-greyInput rounded-md' name="country" id="country" required placeholder='Seleccionar'>
                        <option value="esp">España</option>
                        <option value="fr">Francia</option>
                        <option value="usa">Estados Unidos</option>
                    </select>
                </div>
                <div className='grid grid-cols-4 grid-rows-2 gap-y-2 gap-x-6'>
                        <InputComponent type={'text'} text={'Poblacion'} id={'poblation'} grid={'col-span-2'}/>
                        <InputComponent type={'number'} text={'CP'} id={'cp'} grid={'col-span-2'}/>
                        <InputComponent type={'text'} text={'Calle'} id={'street'} />
                        <InputComponent type={'number'} text={'Nº'} id={'streetNumber'} />
                        <InputComponent type={'number'} text={'Piso'} id={'floor'} />
                        <InputComponent type={'text'} text={'Puerta'} id={'door'} />
                </div>
            </form>
        </div>

    )
}
