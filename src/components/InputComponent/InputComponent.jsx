
export const InputComponent = ({ text, type, id, placeholder, grid }) => {


    return (
        <div className={`flex flex-col gap-[3px] ${grid ? `${grid}` : ''}`}>
            <label className="text-sm" htmlFor={id}>{text}</label>
            <input className="text-xs py-2.5 px-2 border border-greyInput rounded-md" type={type} name={id} id={id} placeholder={placeholder ? placeholder : ''} required />
        </div>
    )
}
