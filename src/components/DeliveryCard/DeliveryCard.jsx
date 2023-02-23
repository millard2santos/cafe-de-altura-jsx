export const DeliveryCard = ({ free, text0, text1, setFreeDelivery }) => {

    const handleChange = (e) => {
        setFreeDelivery(e.target.value === '0' ? true : false)
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                {
                    free ? <input onChange={handleChange} className="accent-green w-3.5 h-3.5 envio" type="radio" id='free' name="envio" value='0'/>
                    : <input onChange={handleChange} className="accent-green w-3.5 h-3.5 envio" type="radio" id='paid' name="envio" value='checked'  />
                }
                <label htmlFor={free ? 'free' : 'paid'}>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm">{text0}</p>
                        <p className="text-sm">{text1}</p>
                    </div>
                </label>
            </div>
            <p className="font-semibold text-lg">{free ? 'GRATIS' : '9,00€'}</p>
        </div>
    )
}
