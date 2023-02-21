import {Link} from 'react-router-dom'

export const NavLinks = ({text,url}) => {
  return (
    <Link to={url} className="font-semibold text-sm hover:outline hover:bg-grey outline-4 outline-grey rounded">{text}</Link>
  )
}