import React from 'react'

export const PaymentType = ({text0, text1, id}) => {

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <input className="accent-green w-3.5 h-3.5 envio" type="radio" id={id} name="envio" value="" />
                <label htmlFor={id}>
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold text-sm">{text0}</p>
                        <p className="text-sm">{text1}</p>
                    </div>
                </label>
            </div>
            <p className="font-semibold text-lg"></p>
        </div>
    )
}
