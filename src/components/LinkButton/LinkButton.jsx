import { Link } from "react-router-dom"

export const LinkButton = ({bgColor,text, url, noShadow}) => {
  return (
    <Link to={url}><button className={`py-3 font-semibold px-6 rounded ${noShadow ? '' : 'shadow-normal'} ${bgColor} text-sm ${bgColor === 'bg-transparent' ? 'text-green' : 'text-white'}`}>{text}</button></Link>
  )
}
