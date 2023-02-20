import { Link } from 'react-router-dom'
import cup from '../../assets/icons/cup.png'

export const Logo = ({color}) => {
    return (
        <Link to="/">
            <div className="flex justify-center items-center gap-2">
                <h2 className={`text-2xl ${color !== 'text-white' ? 'opacity-80' : ''}`}>cafedealtura.com</h2>
                <img src={cup} alt="cup" className="" />
            </div>
        </Link>
    )
}
