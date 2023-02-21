import { Link } from 'react-router-dom'

export const Logo = ({color}) => {
    return (
        <Link to="/">
            <div className="flex justify-center items-center gap-2">
                <h2 className={`text-2xl ${color !== 'text-white' ? 'opacity-80' : ''}`}>cafedealtura.com</h2>
                <img src='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/cup.png?alt=media&token=8f86ac03-c85e-4487-885d-5ce1da5cf4d8' alt="cup" className="" />
            </div>
        </Link>
    )
}
