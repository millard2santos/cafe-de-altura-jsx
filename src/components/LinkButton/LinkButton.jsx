import { Link } from "react-router-dom"

export const LinkButton = ({bgColor,text, url, noShadow, disable}) => {
  return (
    <Link to={!disable ? url : ''}><button className={`py-3 font-semibold px-6 rounded ${noShadow ? '' : 'shadow-normal'} ${bgColor && !disable ? bgColor : `bg-grey opacity-50`} text-sm ${bgColor === 'bg-transparent' ? 'text-green' : 'text-white'}`}>{text}</button></Link>
  )
}
