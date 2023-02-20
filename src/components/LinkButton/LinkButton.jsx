export const LinkButton = ({bgColor,text}) => {
  return (
    <button className={`py-3 px-6 rounded shadow-normal ${bgColor} text-sm text-white`}>{text}</button>
  )
}
