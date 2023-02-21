import { useState } from 'react'

export const QaCard = ({ text0, text1 }) => {

    const [hide, setHide] = useState(true)

    const handleClick = () => {
        setHide(prev => !prev)
    }

    return (
        <div className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-darkGrey w-full">
            <div className="qa-div-click flex justify-between items-center">
                <p className="text-lg font-semibold">{text0}</p>
                <div onClick={handleClick} className={`py-2 px-1 cursor-pointer ${hide ? '' : 'rotate-180'}`}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/upArrow.png?alt=media&token=0bd91dd2-be02-4a90-9d24-9da2bcc45a7d' alt="" className="" />
                </div>
            </div>
            <div className={`w-full h-px bg-grey opacity-30 ${hide ? 'hidden' : ''} `}></div>
            <p className={`text-xs ${hide ? 'hidden' : ''}`}>{text1}</p>
        </div>
    )
}
